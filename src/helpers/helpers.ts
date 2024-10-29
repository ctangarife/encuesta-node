import { Transform } from 'class-transformer';

export function TransformDate() {
  return Transform(({ value }) => {
    if (typeof value === 'string') {
      const [day, month, year, time] = value.split(/[-\s:]/);
      return new Date(`${year}-${month}-${day}T${time}:00Z`);
    }
    return value;
  });
}