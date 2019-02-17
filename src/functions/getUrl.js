export function getUrl(url) {
  let urlWithHttp =
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('ftp://');
  if (!urlWithHttp) {
    const newurl = `http://${url}`;
    return newurl;
  }
  return url;
}
