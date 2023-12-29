import { format } from 'date-fns';
import { th } from 'date-fns/locale';
import { utcToZonedTime } from 'date-fns-tz';

export function convertToThaiDate(dateString: string): string {
  const utcDate = new Date(dateString);

  const modifiedDate = new Date(
    utcDate.getFullYear() + 543,
    utcDate.getMonth(),
    utcDate.getDate()
  );

  const thaiDate = format(
    utcToZonedTime(modifiedDate, 'Asia/Bangkok'),
    'dd MMMM yyyy',
    {
      locale: th,
    }
  );
  return thaiDate;
}
