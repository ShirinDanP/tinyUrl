export function getUrl(url) {
  var protocol_ok =
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('ftp://');
  if (!protocol_ok) {
    const newurl = 'http://' + url;
    return newurl;
  } else {
    return url;
  }
}
