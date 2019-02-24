export function getUrl(url) {
  const urlWithHttp =
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('ftp://');
  if (!urlWithHttp) {
    return `http://${url}`;
  }
  return url;
}
