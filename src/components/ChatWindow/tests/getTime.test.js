import getTime from '../getTime';

describe('getTime function', () => {
  test('Should return truthy', () => {
    expect(getTime()).toBeTruthy();
    expect(getTime()).not.toBeFalsy();
    expect(getTime()).not.toBeUndefined();
    expect(getTime()).not.toBeNaN();
    expect(getTime()).not.toBeNull();
  });

  test('Should return current date  in format hours:minutes', () => {
    const __mockGetTime__ = () => {
      const date = new Date();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      if (hour < 10) hour = '0' + hour;
      if (minutes < 10) minutes = '0' + minutes;
      return `${hour}:${minutes}`;
    };
    expect(getTime()).toBe(__mockGetTime__());
  });
});
