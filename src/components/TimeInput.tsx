import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TimeInputProps {
  value: string; // Total minutes as string
  onChange: (minutes: string) => void;
  placeholder?: string;
  className?: string;
}

export const TimeInput = ({ value, onChange, placeholder, className }: TimeInputProps) => {
  const totalMinutes = parseInt(value) || 0;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const handleHoursChange = (newHours: string) => {
    const h = parseInt(newHours) || 0;
    const newTotal = h * 60 + minutes;
    onChange(newTotal.toString());
  };

  const handleMinutesChange = (newMinutes: string) => {
    const m = parseInt(newMinutes) || 0;
    const newTotal = hours * 60 + m;
    onChange(newTotal.toString());
  };

  return (
    <div className={`flex gap-2 items-center ${className}`}>
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