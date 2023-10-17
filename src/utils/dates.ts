import { formatRelative } from 'date-fns';
import { es } from 'date-fns/locale';

export function format (date: Date) {
  return formatRelative(date, new Date(), { locale: es });
}
