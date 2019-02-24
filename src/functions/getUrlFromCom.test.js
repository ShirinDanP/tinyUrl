import { getUrlfromCom } from './getUrlFromCom';

describe('getUrlfromCom', () => {
  test('should return first part of a url before slash', () => {
    let value = getUrlfromCom('https://www.tretton37.com/who-we-are');
    expect(value).toBe('https://www.tretton37.com/');
  });
});
