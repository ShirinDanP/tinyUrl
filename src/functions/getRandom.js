export function getRandom() {
  const list = 'abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLOMNPQRSTUVWXYZ0123456789';
  let result = [...Array(6)]
    .map(() => {
      const random = Math.floor(Math.random() * list.length);
      return list.charAt(random);
    })
    .join('');
  return result;
}
