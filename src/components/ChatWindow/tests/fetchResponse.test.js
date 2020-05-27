import fetchResponse, { getResponse, suggestParse } from '../logic/fetchResponse';

describe('fetchResponse function', () => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  const settingAPI = {
    urlRequest: 'http://example.com',
    urlResponse: 'http://example.com',
  };

  test('should called functions', () => {
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    const addMessage = jest.fn();
    fetchResponse('messageValue', addMessage, settingAPI);
    expect(fetch).toBeCalled();
    global.fetch.mockClear();
  });

  describe('getResponse function', () => {
    test('should called functions', () => {
      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
      const addMessage = jest.fn();
      getResponse('customToken', 'customKey', addMessage, settingAPI);
      expect(fetch).toBeCalled();
      global.fetch.mockClear();
    });
  });

  describe('suggestParse function', () => {
    test('should return array of suggests', () => {
      expect(suggestParse('<suggest>option 1,option 2</suggest>')).toEqual([
        'option 1',
        'option 2',
      ]);
    });
  });
});
