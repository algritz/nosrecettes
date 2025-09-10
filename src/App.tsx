import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RecipePage from "./pages/RecipePage";
import Admin from "./pages/Admin";
import NewRecipe from "./pages/NewRecipe";
import EditRecipe from "./pages/EditRecipe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Get the base name for GitHub Pages
const basename = import.meta.env.PROD ? "/nosrecettes" : "";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recipe/:slug" element={<RecipePage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/new-recipe" element={<NewRecipe />} />
          <Route path="/edit-recipe/:slug" element={<EditRecipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;