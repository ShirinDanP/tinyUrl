export function getUrlfromCom(url) {
  return `${url
    .split('/')
    .slice(0, 3)
    .join('/')}/`;
}
