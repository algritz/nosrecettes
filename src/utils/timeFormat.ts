import type { TimeRange } from '../types/recipe';
import { isExactTime } from './timeUtils';

/**
 * Format time in minutes to human-readable French format
 * Handles both single values and time ranges
 */
export const formatTime = (time: number | TimeRange): string => {
  // Handle TimeRange objects
  if (typeof time === 'object' && time !== null) {
    const range = time as TimeRange;

    // If min === max, format as single value
    if (isExactTime(range)) {
      return formatTime(range.min);
    }

    // Format as range "20-25 min" or "1h 30min-2h"
    return formatTimeRange(range);
  }

  // Original single-value logic
  const totalMinutes = time;
  if (totalMinutes === 0) return '0min';

  const days = Math.floor(totalMinutes / (24 * 60));
  const remainingMinutes = totalMinutes % (24 * 60);
  const hours = Math.floor(remainingMinutes / 60);
  const minutes = remainingMinutes % 60;

  const parts = [];

  if (days > 0) {
    parts.push(`${days} jour${days > 1 ? 's' : ''}`);
  }

  if (hours > 0) {
    parts.push(`${hours}h`);
  }

  if (minutes > 0) {
    parts.push(`${minutes}min`);
  }

  return parts.join(' ');
};

/**
 * Internal helper to format a time range
 */
function formatTimeRange(range: TimeRange): string {
  const { min, max } = range;

  // Both values in same unit (minutes only)
  if (min < 60 && max < 60) {
    return `${min}-${max}min`;
  }

  // Both values in same unit (hours with optional minutes)
  if (min >= 60 && max >= 60) {
    const minHours = Math.floor(min / 60);
    const minMins = min % 60;
    const maxHours = Math.floor(max / 60);
    const maxMins = max % 60;

    // Same hours, different minutes: "1h 30min-45min"
    if (minHours === maxHours) {
      const minPart = minMins > 0 ? `${minHours}h ${minMins}min` : `${minHours}h`;
      const maxPart = maxMins > 0 ? `${maxMins}min` : '';
      return maxPart ? `${minPart}-${maxPart}` : minPart;
    }

    // Different hours: "1h 30min-2h" or "1h 30min-2h 15min"
    const minPart = minMins > 0 ? `${minHours}h ${minMins}min` : `${minHours}h`;
    const maxPart = maxMins > 0 ? `${maxHours}h ${maxMins}min` : `${maxHours}h`;
    return `${minPart}-${maxPart}`;
  }

  // Mixed units (min in minutes, max in hours)
  const minPart = formatTime(min);
  const maxPart = formatTime(max);
  return `${minPart}-${maxPart}`;
}

/**
 * Format time in compact format without spaces
 * Handles both single values and time ranges
 */
export const formatTimeShort = (time: number | TimeRange): string => {
  // Handle TimeRange objects
  if (typeof time === 'object' && time !== null) {
    const range = time as TimeRange;

    // If min === max, format as single value
    if (isExactTime(range)) {
      return formatTimeShort(range.min);
    }

    // Format as compact range
    return formatTimeRangeShort(range);
  }

  // Original single-value logic (compact format)
  const totalMinutes = time;
  if (totalMinutes === 0) return '0min';

  const days = Math.floor(totalMinutes / (24 * 60));
  const remainingMinutes = totalMinutes % (24 * 60);
  const hours = Math.floor(remainingMinutes / 60);
  const minutes = remainingMinutes % 60;

  const parts = [];

  if (days > 0) {
    parts.push(`${days}j`);
  }

  if (hours > 0) {
    parts.push(`${hours}h`);
  }

  if (minutes > 0) {
    parts.push(`${minutes}min`);
  }

  return parts.join('');
};

/**
 * Internal helper to format a time range in compact format
 */
function formatTimeRangeShort(range: TimeRange): string {
  const { min, max } = range;

  // Both values in minutes only
  if (min < 60 && max < 60) {
    return `${min}-${max}min`;
  }

  // Both values with hours
  if (min >= 60 && max >= 60) {
    const minHours = Math.floor(min / 60);
    const minMins = min % 60;
    const maxHours = Math.floor(max / 60);
    const maxMins = max % 60;

    // Same hours: "1h30min-45min"
    if (minHours === maxHours) {
      const minPart = minMins > 0 ? `${minHours}h${minMins}min` : `${minHours}h`;
      const maxPart = maxMins > 0 ? `${maxMins}min` : '';
      return maxPart ? `${minPart}-${maxPart}` : minPart;
    }

    // Different hours: "1h30min-2h"
    const minPart = minMins > 0 ? `${minHours}h${minMins}min` : `${minHours}h`;
    const maxPart = maxMins > 0 ? `${maxHours}h${maxMins}min` : `${maxHours}h`;
    return `${minPart}-${maxPart}`;
  }

  // Mixed units
  const minPart = formatTimeShort(min);
  const maxPart = formatTimeShort(max);
  return `${minPart}-${maxPart}`;
}