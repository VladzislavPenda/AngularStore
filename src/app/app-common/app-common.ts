export function makeApiUrl(url: string) {
  const prefix = '/api/';
  return `${prefix}${url}`;
}
