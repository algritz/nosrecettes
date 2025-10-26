export const formatTime = (totalMinutes: number): string => {
  if (totalMinutes === 0) return '0 min';
  
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

export const formatTimeShort = (totalMinutes: number): string => {
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