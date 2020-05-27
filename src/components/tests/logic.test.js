import {
  toggleEnabledHandler,
  toggleFullScreenHandler,
  resizeHandler,
  setNewPosition,
  throttle,
  checkLang,
} from '../logic';

describe('logic', () => {
  global.sessionStorage = jest.fn();
  global.sessionStorage.setItem = jest.fn((key, value) => (global.sessionStorage[key] = value));
  global.sessionStorage.getItem = jest.fn(key => global.sessionStorage[key]);
  describe('toggleEnabledHandler function', () => {
    test('should toggle isEnabled', () => {
      const setEnabled = jest.fn(() => (isEnabled = !isEnabled));
      let isEnabled = false;
      toggleEnabledHandler(setEnabled, isEnabled)();
      expect(isEnabled).toBe(true);
    });

    test('should set sessionStorage isEnabled', () => {
      const setEnabled = jest.fn(() => (isEnabled = !isEnabled));
      let isEnabled = false;
      toggleEnabledHandler(setEnabled, isEnabled)();
      expect(JSON.parse(global.sessionStorage.getItem('sbu-isEnabled')).isEnabled).toBe(isEnabled);
    });

    test('should return a function', () => {
      const setEnabled = jest.fn(() => (isEnabled = !isEnabled));
      let isEnabled = false;
      expect(toggleEnabledHandler(setEnabled, isEnabled)).toBeInstanceOf(Function);
    });
  });

  describe('toggleFullScreenHandler function', () => {
    test('should toggle isEnabled', () => {
      const setFullScreen = jest.fn(() => (isFullScreen = !isFullScreen));
      let isFullScreen = false;
      toggleFullScreenHandler(setFullScreen, isFullScreen)();
      expect(isFullScreen).toBe(true);
    });

    test('should set sessionStorage isEnabled', () => {
      const setFullScreen = jest.fn(() => (isFullScreen = !isFullScreen));
      let isFullScreen = false;
      toggleFullScreenHandler(setFullScreen, isFullScreen)();
      expect(JSON.parse(global.sessionStorage.getItem('sbu-isFullScreen')).isFullScreen).toBe(
        isFullScreen,
      );
    });

    test('should return a function', () => {
      const setFullScreen = jest.fn(() => (isFullScreen = !isFullScreen));
      let isFullScreen = false;
      expect(toggleFullScreenHandler(setFullScreen, isFullScreen)).toBeInstanceOf(Function);
    });
  });

  describe('setNewPosition function', () => {
    test('should call functions', () => {
      const setWindowCurrentHeight = jest.fn();
      const setWindowCurrentWidth = jest.fn();
      resizeHandler(setWindowCurrentHeight, setWindowCurrentWidth)();
      expect(setWindowCurrentHeight).toBeCalled();
      expect(setWindowCurrentWidth).toBeCalled();
    });
  });

  describe('resizeHandler function', () => {
    let e;
    let currentPosition;
    let setCurrentPosition;
    let windowCurrentWidth;
    let windowCurrentHeight;
    global.sessionStorage = jest.fn();
    global.sessionStorage.setItem = jest.fn((key, value) => (global.sessionStorage[key] = value));
    global.sessionStorage.getItem = jest.fn(key => global.sessionStorage[key]);

    beforeEach(() => {
      e = { pageY: 20, pageX: 20 };
      currentPosition = { bottom: 20, right: 20 };
      setCurrentPosition = jest.fn(state => (currentPosition = state));
      windowCurrentWidth = 1200;
      windowCurrentHeight = 1200;
    });

    afterEach(() => jest.clearAllMocks());

    test('should work width default currentSize', () => {
      global.window.startMousePosition = {
        y: 50,
        x: 50,
      };
      setNewPosition(
        e,
        currentPosition,
        setCurrentPosition,
        windowCurrentWidth,
        windowCurrentHeight,
      );
      expect(setCurrentPosition).toBeCalled();
    });

    test('should work width sessionStorage currentSize', () => {
      global.window.startMousePosition = {
        y: 50,
        x: 50,
      };
      global.sessionStorage.setItem('sbu-currentSize', JSON.stringify({ width: 400, height: 400 }));
      setNewPosition(
        e,
        currentPosition,
        setCurrentPosition,
        windowCurrentWidth,
        windowCurrentHeight,
      );
      expect(setCurrentPosition).toBeCalled();
    });

    test('should set new position width if they < 0', () => {
      windowCurrentWidth = 20;
      windowCurrentHeight = 20;
      global.window.startMousePosition = {
        y: 50,
        x: 50,
      };
      global.sessionStorage.setItem('sbu-currentSize', JSON.stringify({ width: 400, height: 400 }));
      setNewPosition(
        e,
        currentPosition,
        setCurrentPosition,
        windowCurrentWidth,
        windowCurrentHeight,
      );
      expect(setCurrentPosition).toBeCalled();
    });
  });

  describe('throttle function', () => {
    test('should return functions', () => {
      const fn = jest.fn();
      expect(throttle(fn, 10)).toBeInstanceOf(Function);
    });
  });

  describe('checkLang  function', () => {
    test('should return en if arg = en', () => {
      expect(checkLang('en')).toBe('en');
    });

    test('should return pt if arg = pt', () => {
      expect(checkLang('pt')).toBe('pt');
    });

    test('should return de if arg = de', () => {
      expect(checkLang('de')).toBe('de');
    });

    test('should return ru if arg = ru', () => {
      expect(checkLang('ru')).toBe('ru');
    });

    test('should return es if arg = es', () => {
      expect(checkLang('es')).toBe('es');
    });

    test('should return en if arg = tt', () => {
      expect(checkLang('tt')).toBe('en');
    });
  });
});
