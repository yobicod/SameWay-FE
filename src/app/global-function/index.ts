import { format } from 'date-fns';
import { th } from 'date-fns/locale';
import { utcToZonedTime } from 'date-fns-tz';

export function convertToThaiDate(dateString: string): string {
  const utcDate = new Date(dateString);
  const thaiDate = format(
    utcToZonedTime(utcDate, 'Asia/Bangkok'),
    'dd MMMM yyyy',
    // 'EEEE dd MMMM yyyy',
    {
      locale: th,
    }
  );
  return thaiDate;
}
