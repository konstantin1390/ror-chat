import { changeVisibilityHandler, scrollDown, checkScroll } from '../BodyHelper';

describe('getHistory function', () => {
  test('should return a function', () => {
    const setFastForwardButtonVisibility = jest.fn();
    const scrollElement = {
      current: {},
    };
    expect(changeVisibilityHandler(scrollElement, setFastForwardButtonVisibility)).toBeInstanceOf(
      Function,
    );
  });

  test('should don`t call function', () => {
    const setFastForwardButtonVisibility = jest.fn();
    const scrollElement = {
      current: null,
    };
    changeVisibilityHandler(scrollElement, setFastForwardButtonVisibility)();
    expect(setFastForwardButtonVisibility).not.toBeCalled();
  });

  test('should call function', () => {
    const setFastForwardButtonVisibility = jest.fn();
    const scrollElement = {
      current: {},
    };
    changeVisibilityHandler(scrollElement, setFastForwardButtonVisibility)();
    expect(setFastForwardButtonVisibility).toBeCalled();
  });
});

describe('scrollDown function', () => {
  const scrollElement = {
    current: {
      scrollTop: 10,
      scrollHeight: 100,
    },
  };

  test('should assign scrollHeight value to scrollTop', () => {
    scrollDown(scrollElement)();
    expect(scrollElement.current.scrollTop).toBe(100);
  });

  test('should return a function', () => {
    expect(scrollDown(scrollElement)).toBeInstanceOf(Function);
  });
  test('should return undefined', () => {
    const scrollElement = null;
    expect(scrollDown(scrollElement)()).toBeUndefined();
  });
});

describe('checkScroll function', () => {
  const scrollElement = {
    current: {
      scrollTop: 10,
      scrollHeight: 100,
    },
  };

  test('should call scrollDown fn', () => {
    const ScrollDown = jest.fn();
    checkScroll(scrollElement, ScrollDown);
    expect(ScrollDown).toBeCalled();
  });
});
