import type { TimeRange } from '../types/recipe';

/**
 * Type guard to check if a value is a valid TimeRange object
 */
export function isTimeRange(value: unknown): value is TimeRange {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const range = value as Record<string, unknown>;
  return (
    typeof range.min === 'number' &&
    typeof range.max === 'number' &&
    Number.isFinite(range.min) &&
    Number.isFinite(range.max)
  );
}

/**
 * Validates that a TimeRange has min <= max and both values are non-negative
 * Throws an error if validation fails
 */
export function validateTimeRange(range: TimeRange): void {
  if (!isTimeRange(range)) {
    throw new Error('Invalid TimeRange: must be an object with numeric min and max properties');
  }

  if (range.min < 0 || range.max < 0) {
    throw new Error(`Invalid TimeRange: times must be non-negative (got min: ${range.min}, max: ${range.max})`);
  }

  if (range.min > range.max) {
    throw new Error(`Invalid TimeRange: min (${range.min}) cannot be greater than max (${range.max})`);
  }
}

/**
 * Get the maximum time from a TimeRange
 */
export function getMaxTime(range: TimeRange): number {
  return range.max;
}

/**
 * Get the minimum time from a TimeRange
 */
export function getMinTime(range: TimeRange): number {
  return range.min;
}

/**
 * Check if a TimeRange represents an exact time (min === max)
 */
export function isExactTime(range: TimeRange): boolean {
  return range.min === range.max;
}

/**
 * Create a TimeRange from a single value (for exact times)
 */
export function createExactTime(minutes: number): TimeRange {
  if (minutes < 0 || !Number.isFinite(minutes)) {
    throw new Error(`Invalid time value: ${minutes}`);
  }

  return { min: minutes, max: minutes };
}

/**
 * Create a TimeRange from min and max values
 */
export function createTimeRange(min: number, max: number): TimeRange {
  const range: TimeRange = { min, max };
  validateTimeRange(range);
  return range;
}
