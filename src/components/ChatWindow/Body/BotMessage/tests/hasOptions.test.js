import hasOptions from '../hasOptions';

describe('hasOptions function', () => {
  test('should return false when lastSugID is falsy', () => {
    const responseID = '1';
    const lastSugID = false;
    expect(hasOptions(responseID, lastSugID)).toBeFalsy();
    expect(hasOptions(responseID, lastSugID)).toBe(false);
  });

  test('should return false when lastSugID !== responseID', () => {
    const responseID = '1';
    const lastSugID = '2';
    expect(hasOptions(responseID, lastSugID)).toBeFalsy();
    expect(hasOptions(responseID, lastSugID)).toBe(false);
  });

  test('should return true when lastSugID === responseID and lastSugID not falsy', () => {
    const responseID = '1';
    const lastSugID = '1';
    expect(hasOptions(responseID, lastSugID)).not.toBeFalsy();
    expect(hasOptions(responseID, lastSugID)).toBe(true);
  });
});
