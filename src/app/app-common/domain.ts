import { stringify } from 'querystring';

export type DateTypes = 'full' | 'short';

export function formatDate(date: string, type: DateTypes) {
  const dateArr = date.split(/[.T]/);
  if (type === 'short') {
    return dateArr[0];
  }

  if (type === 'full') {
    return dateArr[0] + ' ' + dateArr[1];
  }

  return date;
}
