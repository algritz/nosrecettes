import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import type { Recipe } from "../src/types/recipe";

interface ViteManifestEntry {
	file: string;
	css?: string[];
	assets?: string[];
	isEntry?: boolean;
	src?: string;
}
type ViteManifest = Record<string, ViteManifestEntry>;
interface ResolvedAssets {
	js: string;
	css: string[];
}
interface RecipeRenderFailure {
	slug: string;
	stage: "render" | "write";
	error: string;
	hint: string;
}
interface BuildSsgResult {
	rendered: number;
	failed: RecipeRenderFailure[];
}
interface HelmetDatum {
	toString(): string;
}
interface RenderResult {
	html: string;
	helmet: {
		title: HelmetDatum;
		meta: HelmetDatum;
		link: HelmetDatum;
		script: HelmetDatum;
	};
}

async function loadRecipes(): Promise<Recipe[]> {
	const recipesPath = path.join(process.cwd(), "public", "recipes.json");
	const raw = await fs.promises.readFile(recipesPath, "utf-8");
	const data = JSON.parse(raw) as { recipes: Recipe[] } | Recipe[];
	return Array.isArray(data) ? data : data.recipes;
}

function resolveAssets(manifest: ViteManifest): ResolvedAssets {
	const entry = Object.values(manifest).find((e) => e.isEntry);
	if (!entry)
		throw new Error(
			"No entry chunk found in Vite manifest — was build.manifest: true set?",
		);
	return {
		js: `/assets/${path.basename(entry.file)}`,
		css: (entry.css ?? []).map((c) => `/assets/${path.basename(c)}`),
	};
}

type RenderFn = (url: string, recipe: Recipe) => RenderResult;

async function getRenderFn(): Promise<RenderFn> {
	const bundlePath = path.join(
		process.cwd(),
		"dist",
		"server",
		"entry-server.js",
	);
	const mod = await import(/* @vite-ignore */ pathToFileURL(bundlePath).href);
	return mod.render as RenderFn;
}

function assembleHtml(
	renderResult: RenderResult,
	assets: ResolvedAssets,
): string {
	const { html, helmet } = renderResult;
	const cssLinks = assets.css
		.map((c) => `  <link rel="stylesheet" href="${c}">`)
		.join("\n");
	return `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${helmet.script.toString()}
${cssLinks}
  </head>
  <body>
    <div id="root">${html}</div>
    <script type="module" src="${assets.js}"></script>
  </body>
</html>`;
}

async function writeRecipeFile(slug: string, html: string): Promise<void> {
	const outDir = path.join(process.cwd(), "dist", "recipe", slug);
	await fs.promises.mkdir(outDir, { recursive: true });
	await fs.promises.writeFile(path.join(outDir, "index.html"), html, "utf-8");
}

async function buildSsg(): Promise<BuildSsgResult> {
	const manifestPath = path.join(
		process.cwd(),
		"dist",
		".vite",
		"manifest.json",
	);
	let manifest: ViteManifest;
	try {
		manifest = JSON.parse(await fs.promises.readFile(manifestPath, "utf-8"));
	} catch {
		throw new Error(
			`Vite manifest not found at ${manifestPath} — run pnpm build before build-ssg.ts`,
		);
	}

	const assets = resolveAssets(manifest);
	const recipes = await loadRecipes();
	const renderFn = await getRenderFn();

	let rendered = 0;
	const failed: RecipeRenderFailure[] = [];

	for (const recipe of recipes) {
		let renderResult: RenderResult;
		try {
			renderResult = renderFn(`/recipe/${recipe.slug}`, recipe);
		} catch (err) {
			const error = err instanceof Error ? err.message : String(err);
			console.warn(`[WARN] render failed for ${recipe.slug}: ${error}`);
			failed.push({
				slug: recipe.slug,
				stage: "render",
				error,
				hint: "Check RecipePageSSR and entry-server.tsx for SSR-unsafe code",
			});
			continue;
		}

		const html = assembleHtml(renderResult, assets);

		try {
			await writeRecipeFile(recipe.slug, html);
			rendered++;
		} catch (err) {
			const error = err instanceof Error ? err.message : String(err);
			console.warn(`[WARN] write failed for ${recipe.slug}: ${error}`);
			failed.push({
				slug: recipe.slug,
				stage: "write",
				error,
				hint: "Check disk permissions on dist/recipe/",
			});
		}
	}

	console.log(
		`\nBuild SSG complete: ${rendered} rendered, ${failed.length} failed`,
	);
	if (failed.length > 0) {
		for (const f of failed)
			console.warn(
				`  FAILED [${f.stage}] ${f.slug}: ${f.error} — hint: ${f.hint}`,
			);
	}

	return { rendered, failed };
}

buildSsg()
	.then(({ rendered, failed }) => {
		if (failed.length > 0 && rendered === 0) {
			process.exit(1);
		}
	})
	.catch((err) => {
		console.error("[ERROR]", (err as Error).message);
		process.exit(1);
	});
