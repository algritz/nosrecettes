import { Input } from '@/components/ui/input';

interface TimeInputProps {
  value: string; // Total minutes as string
  onChange: (minutes: string) => void;
  placeholder?: string;
  className?: string;
  allowDays?: boolean; // New prop to enable days field
}

export const TimeInput = ({ value, onChange, placeholder, className, allowDays = false }: TimeInputProps) => {
  const totalMinutes = parseInt(value) || 0;
  const days = Math.floor(totalMinutes / (24 * 60));
  const remainingMinutes = totalMinutes % (24 * 60);
  const hours = Math.floor(remainingMinutes / 60);
  const minutes = remainingMinutes % 60;

  const handleDaysChange = (newDays: string) => {
    const d = parseInt(newDays) || 0;
    const newTotal = d * 24 * 60 + hours * 60 + minutes;
    onChange(newTotal.toString());
  };

  const handleHoursChange = (newHours: string) => {
    const h = parseInt(newHours) || 0;
    const newTotal = days * 24 * 60 + h * 60 + minutes;
    onChange(newTotal.toString());
  };

  const handleMinutesChange = (newMinutes: string) => {
    const m = parseInt(newMinutes) || 0;
    const newTotal = days * 24 * 60 + hours * 60 + m;
    onChange(newTotal.toString());
  };

  return (
    <div className={`flex gap-2 items-center ${className}`}>
      {allowDays && (
        <div className="flex items-center gap-1">
          <Input
            type="number"
            min="0"
            max="365"
            value={days || ''}
            onChange={(e) => handleDaysChange(e.target.value)}
            placeholder="0"
            className="w-16"
          />
          <span className="text-sm text-muted-foreground">j</span>
        </div>
      )}
      <div className="flex items-center gap-1">
        <Input
          type="number"
          min="0"
          max="23"
          value={hours || ''}
          onChange={(e) => handleHoursChange(e.target.value)}
          placeholder="0"
          className="w-16"
        />
        <span className="text-sm text-muted-foreground">h</span>
      </div>
      <div className="flex items-center gap-1">
        <Input
          type="number"
          min="0"
          max="59"
          step="5"
          value={minutes || ''}
          onChange={(e) => handleMinutesChange(e.target.value)}
          placeholder="0"
          className="w-16"
        />
        <span className="text-sm text-muted-foreground">min</span>
      </div>
    </div>
  );
};