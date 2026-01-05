import { formatDate, parseISO } from "date-fns";
export function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{formatDate(date, 'LLLL d, yyyy')}</time>;
}