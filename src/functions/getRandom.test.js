import { getRandom } from './getRandom';

describe('getRandomValue', () => {
  test('should return a value with length 6 and not null or undefined', () => {
    let value = getRandom();
    expect(value.length).toEqual(6);
    expect(value).not.toBeUndefined();
    expect(value).not.toBeNull();
    expect(value).toBeTruthy();
  });
});
