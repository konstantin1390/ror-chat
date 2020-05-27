import toggleFullScreen from '../toggleFullScreen';

describe('toggleFullScreen function', () => {
  test('should be defined', () => {
    const toggleFullScreenHandler = jest.fn();
    const src = 'custom src';
    expect(toggleFullScreen(toggleFullScreenHandler, src)).toBeDefined();
  });

  test('should return a function', () => {
    const toggleFullScreenHandler = jest.fn();
    const src = 'custom src';
    expect(toggleFullScreen(toggleFullScreenHandler, src)).toBeInstanceOf(Function);
  });

  test('should called a functions', () => {
    const toggleFullScreenHandler = jest.fn();
    const src = 'custom src';
    const e = {
      preventDefault: jest.fn(),
    };
    toggleFullScreen(toggleFullScreenHandler, src)(e);
    expect(toggleFullScreenHandler).toBeCalled();
  });
});
