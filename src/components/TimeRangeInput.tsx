import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import type { TimeRange } from '../types/recipe'
import { isExactTime } from '../utils/timeUtils'

interface TimeRangeInputProps {
  /**
   * Current time range value
   * Accepts TimeRange object or string for backward compatibility during migration
   */
  value: TimeRange | string

  /**
   * Callback when time range changes
   * Always provides a valid TimeRange object
   */
  onChange: (range: TimeRange) => void

  /**
   * Whether to show days input field (default: false)
   * When true, each column shows: days, hours, minutes
   * When false, each column shows: hours, minutes
   */
  allowDays?: boolean

  /**
   * Additional CSS class for container
   */
  className?: string

  /**
   * Label for the entire input group (optional)
   * Example: "Prep Time" or "Cook Time"
   */
  label?: string

  /**
   * Whether the field is required (default: false)
   */
  required?: boolean

  /**
   * Whether the input is disabled (default: false)
   */
  disabled?: boolean
}

/**
 * Parse TimeRange object to display format
 */
function parseTimeRangeToDisplay(
  range: TimeRange,
  allowDays: boolean,
): {
  minDays: number
  minHours: number
  minMins: number
  maxDays: number
  maxHours: number
  maxMins: number
} {
  const { min, max } = range

  // Convert min to display units
  const minDays = allowDays ? Math.floor(min / 1440) : 0
  const minHours = Math.floor((min % 1440) / 60)
  const minMins = min % 60

  // Convert max to display units
  const maxDays = allowDays ? Math.floor(max / 1440) : 0
  const maxHours = Math.floor((max % 1440) / 60)
  const maxMins = max % 60

  return { minDays, minHours, minMins, maxDays, maxHours, maxMins }
}

interface TimeDisplayValues {
  days: number
  hours: number
  mins: number
}

/**
 * Convert display values back to TimeRange object
 */
function displayToTimeRange(
  minValues: TimeDisplayValues,
  maxValues: TimeDisplayValues,
): TimeRange {
  const min = minValues.days * 1440 + minValues.hours * 60 + minValues.mins
  const max = maxValues.days * 1440 + maxValues.hours * 60 + maxValues.mins

  // Validation: ensure max >= min (auto-adjust if needed)
  return {
    min,
    max: Math.max(min, max),
  }
}

/**
 * Handle backward compatibility with string input
 */
function parseValue(value: TimeRange | string): TimeRange {
  // If already a TimeRange, return as-is
  if (typeof value === 'object' && value !== null) {
    return value
  }

  // If string (legacy format), parse as single value
  if (typeof value === 'string') {
    const minutes = parseInt(value, 10) || 0
    return { min: minutes, max: minutes }
  }

  // Default fallback
  return { min: 0, max: 0 }
}

/**
 * Validate time range and return validation state
 */
function validateRange(range: TimeRange): {
  isValid: boolean
  isExact: boolean
  errorMessage?: string
} {
  const { min, max } = range

  // Check non-negative
  if (min < 0 || max < 0) {
    return {
      isValid: false,
      isExact: false,
      errorMessage: 'Time values must be non-negative',
    }
  }

  // Check min <= max
  if (min > max) {
    return {
      isValid: false,
      isExact: false,
      errorMessage:
        'Maximum time must be greater than or equal to minimum time',
    }
  }

  // Check if exact time
  const isExact = isExactTime(range)

  return {
    isValid: true,
    isExact,
  }
}

export function TimeRangeInput({
  value,
  onChange,
  allowDays = false,
  className = '',
  label,
  required = false,
  disabled = false,
}: TimeRangeInputProps): React.ReactElement {
  // Parse initial value
  const initialRange = parseValue(value)
  const initialDisplay = parseTimeRangeToDisplay(initialRange, allowDays)

  // Local state for display values
  const [minDays, setMinDays] = useState(initialDisplay.minDays)
  const [minHours, setMinHours] = useState(initialDisplay.minHours)
  const [minMins, setMinMins] = useState(initialDisplay.minMins)
  const [maxDays, setMaxDays] = useState(initialDisplay.maxDays)
  const [maxHours, setMaxHours] = useState(initialDisplay.maxHours)
  const [maxMins, setMaxMins] = useState(initialDisplay.maxMins)

  // Sync internal state when value prop changes (e.g., from import)
  useEffect(() => {
    const newRange = parseValue(value)
    const newDisplay = parseTimeRangeToDisplay(newRange, allowDays)

    setMinDays(newDisplay.minDays)
    setMinHours(newDisplay.minHours)
    setMinMins(newDisplay.minMins)
    setMaxDays(newDisplay.maxDays)
    setMaxHours(newDisplay.maxHours)
    setMaxMins(newDisplay.maxMins)
  }, [value, allowDays])

  // Calculate current range and validation
  const currentRange = displayToTimeRange(
    { days: minDays, hours: minHours, mins: minMins },
    { days: maxDays, hours: maxHours, mins: maxMins },
  )
  const validation = validateRange(currentRange)

  // Update parent when display values change
  useEffect(() => {
    if (validation.isValid) {
      onChange(currentRange)
    } else {
      // If max < min, auto-set max to equal min (creating an exact time)
      const calculatedMin = minDays * 1440 + minHours * 60 + minMins
      const calculatedMax = maxDays * 1440 + maxHours * 60 + maxMins

      if (calculatedMax < calculatedMin && calculatedMin > 0) {
        // Auto-copy min values to max
        setMaxDays(minDays)
        setMaxHours(minHours)
        setMaxMins(minMins)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minDays, minHours, minMins, maxDays, maxHours, maxMins])

  return (
    <div className={`space-y-3 ${className}`}>
      {label && (
        <label className="text-sm font-medium">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}

      {/* Minimum row */}
      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">Minimum</label>
        <div className="flex gap-2 items-center">
          {allowDays && (
            <div className="flex items-center gap-1">
              <Input
                type="number"
                min="0"
                max="365"
                value={minDays || ''}
                onChange={(e) => setMinDays(parseInt(e.target.value, 10) || 0)}
                disabled={disabled}
                className="w-16"
                aria-label="Minimum days"
              />
              <span className="text-sm text-muted-foreground">j</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Input
              type="number"
              min="0"
              max="23"
              value={minHours || ''}
              onChange={(e) => setMinHours(parseInt(e.target.value, 10) || 0)}
              disabled={disabled}
              className="w-16"
              aria-label="Minimum hours"
            />
            <span className="text-sm text-muted-foreground">h</span>
          </div>
          <div className="flex items-center gap-1">
            <Input
              type="number"
              min="0"
              max="59"
              value={minMins || ''}
              onChange={(e) => setMinMins(parseInt(e.target.value, 10) || 0)}
              disabled={disabled}
              className="w-16"
              aria-label="Minimum minutes"
            />
            <span className="text-sm text-muted-foreground">min</span>
          </div>
        </div>
      </div>

      {/* Maximum row */}
      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">Maximum</label>
        <div className="flex gap-2 items-center">
          {allowDays && (
            <div className="flex items-center gap-1">
              <Input
                type="number"
                min="0"
                max="365"
                value={maxDays || ''}
                onChange={(e) => setMaxDays(parseInt(e.target.value, 10) || 0)}
                disabled={disabled}
                className="w-16"
                aria-label="Maximum days"
              />
              <span className="text-sm text-muted-foreground">j</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Input
              type="number"
              min="0"
              max="23"
              value={maxHours || ''}
              onChange={(e) => setMaxHours(parseInt(e.target.value, 10) || 0)}
              disabled={disabled}
              className="w-16"
              aria-label="Maximum hours"
            />
            <span className="text-sm text-muted-foreground">h</span>
          </div>
          <div className="flex items-center gap-1">
            <Input
              type="number"
              min="0"
              max="59"
              value={maxMins || ''}
              onChange={(e) => setMaxMins(parseInt(e.target.value, 10) || 0)}
              disabled={disabled}
              className="w-16"
              aria-label="Maximum minutes"
            />
            <span className="text-sm text-muted-foreground">min</span>
          </div>
        </div>
      </div>

      {/* Validation feedback - only show errors */}
      {!validation.isValid && validation.errorMessage && (
        <div
          className="text-xs text-destructive flex items-center gap-1"
          role="alert"
        >
          <span>⚠</span>
          <span>{validation.errorMessage}</span>
        </div>
      )}
    </div>
  )
}
