import { getUrl } from './getUrl';

describe('getUrl', () => {
  test('should return a value with http in the begining if it does not have', () => {
    let value = getUrl('google.com');
    expect(value).toMatch(/http/);
  });
});
