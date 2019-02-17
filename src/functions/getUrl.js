export function getUrl(url) {
  let urlWithHttp =
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('ftp://');
  if (!urlWithHttp) {
    return `http://${url}`;
  }
  return url;
}
