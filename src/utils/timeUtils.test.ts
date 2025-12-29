import { describe, it, expect } from 'vitest'
import {
  isTimeRange,
  validateTimeRange,
  getMaxTime,
  getMinTime,
  isExactTime,
  createExactTime,
  createTimeRange,
} from './timeUtils'

describe('TimeRange Utilities', () => {
  describe('isTimeRange', () => {
    it('returns true for valid TimeRange object', () => {
      expect(isTimeRange({ min: 10, max: 20 })).toBe(true)
    })

    it('returns true for exact time (min === max)', () => {
      expect(isTimeRange({ min: 20, max: 20 })).toBe(true)
    })

    it('returns false for number', () => {
      expect(isTimeRange(20)).toBe(false)
    })

    it('returns false for string', () => {
      expect(isTimeRange('20')).toBe(false)
    })

    it('returns false for null', () => {
      expect(isTimeRange(null)).toBe(false)
    })

    it('returns false for undefined', () => {
      expect(isTimeRange(undefined)).toBe(false)
    })

    it('returns false for object missing min', () => {
      expect(isTimeRange({ max: 20 })).toBe(false)
    })

    it('returns false for object missing max', () => {
      expect(isTimeRange({ min: 10 })).toBe(false)
    })

    it('returns false for object with non-numeric min', () => {
      expect(isTimeRange({ min: '10', max: 20 })).toBe(false)
    })

    it('returns false for object with non-numeric max', () => {
      expect(isTimeRange({ min: 10, max: '20' })).toBe(false)
    })

    it('returns false for object with Infinity min', () => {
      expect(isTimeRange({ min: Infinity, max: 20 })).toBe(false)
    })

    it('returns false for object with NaN max', () => {
      expect(isTimeRange({ min: 10, max: NaN })).toBe(false)
    })
  })

  describe('validateTimeRange', () => {
    it('does not throw for valid range', () => {
      expect(() => validateTimeRange({ min: 10, max: 20 })).not.toThrow()
    })

    it('does not throw for exact time (min === max)', () => {
      expect(() => validateTimeRange({ min: 20, max: 20 })).not.toThrow()
    })

    it('does not throw for zero time', () => {
      expect(() => validateTimeRange({ min: 0, max: 0 })).not.toThrow()
    })

    it('throws for max < min', () => {
      expect(() => validateTimeRange({ min: 30, max: 20 })).toThrow(
        'min (30) cannot be greater than max (20)',
      )
    })

    it('throws for negative min', () => {
      expect(() => validateTimeRange({ min: -5, max: 10 })).toThrow(
        'times must be non-negative',
      )
    })

    it('throws for negative max', () => {
      expect(() => validateTimeRange({ min: 10, max: -5 })).toThrow(
        'times must be non-negative',
      )
    })

    it('throws for both negative', () => {
      expect(() => validateTimeRange({ min: -10, max: -5 })).toThrow(
        'times must be non-negative',
      )
    })

    it('throws for invalid object (non-TimeRange)', () => {
      expect(() =>
        validateTimeRange({ min: '10', max: 20 } as unknown as TimeRange),
      ).toThrow('must be an object with numeric min and max properties')
    })
  })

  describe('getMaxTime and getMinTime', () => {
    it('returns max value from TimeRange', () => {
      expect(getMaxTime({ min: 10, max: 25 })).toBe(25)
    })

    it('returns min value from TimeRange', () => {
      expect(getMinTime({ min: 10, max: 25 })).toBe(10)
    })

    it('returns same value for exact time', () => {
      expect(getMaxTime({ min: 20, max: 20 })).toBe(20)
      expect(getMinTime({ min: 20, max: 20 })).toBe(20)
    })

    it('returns zero for zero time', () => {
      expect(getMaxTime({ min: 0, max: 0 })).toBe(0)
      expect(getMinTime({ min: 0, max: 0 })).toBe(0)
    })
  })

  describe('isExactTime', () => {
    it('returns true when min equals max', () => {
      expect(isExactTime({ min: 20, max: 20 })).toBe(true)
    })

    it('returns false when min differs from max', () => {
      expect(isExactTime({ min: 20, max: 25 })).toBe(false)
    })

    it('returns true for zero time', () => {
      expect(isExactTime({ min: 0, max: 0 })).toBe(true)
    })

    it('returns false for large range', () => {
      expect(isExactTime({ min: 10, max: 100 })).toBe(false)
    })
  })

  describe('Factory functions', () => {
    describe('createExactTime', () => {
      it('creates TimeRange with min === max', () => {
        const result = createExactTime(30)
        expect(result).toEqual({ min: 30, max: 30 })
      })

      it('creates zero time', () => {
        const result = createExactTime(0)
        expect(result).toEqual({ min: 0, max: 0 })
      })

      it('throws for negative value', () => {
        expect(() => createExactTime(-5)).toThrow('Invalid time value: -5')
      })

      it('throws for Infinity', () => {
        expect(() => createExactTime(Infinity)).toThrow(
          'Invalid time value: Infinity',
        )
      })

      it('throws for NaN', () => {
        expect(() => createExactTime(NaN)).toThrow('Invalid time value: NaN')
      })
    })

    describe('createTimeRange', () => {
      it('creates TimeRange with different values', () => {
        const result = createTimeRange(20, 30)
        expect(result).toEqual({ min: 20, max: 30 })
      })

      it('creates exact time when min === max', () => {
        const result = createTimeRange(20, 20)
        expect(result).toEqual({ min: 20, max: 20 })
      })

      it('creates zero range', () => {
        const result = createTimeRange(0, 0)
        expect(result).toEqual({ min: 0, max: 0 })
      })

      it('throws when max < min', () => {
        expect(() => createTimeRange(30, 20)).toThrow(
          'min (30) cannot be greater than max (20)',
        )
      })

      it('throws for negative min', () => {
        expect(() => createTimeRange(-5, 10)).toThrow(
          'times must be non-negative',
        )
      })

      it('throws for negative max', () => {
        expect(() => createTimeRange(10, -5)).toThrow(
          'times must be non-negative',
        )
      })
    })
  })
})
