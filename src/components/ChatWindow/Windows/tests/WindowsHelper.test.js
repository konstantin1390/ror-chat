import {
  changeSize,
  setResizeSettings,
  setWidth,
  toggleFullScreenHelper,
  setTopLeftPosition,
} from '../WindowsHelper';

describe('changeSize function', () => {
  let changeCurrentSize;
  let setRightResize;
  let currentPosition;
  let setCurrentPosition;
  let ref;
  let dir;
  let delta;
  beforeEach(() => {
    changeCurrentSize = jest.fn();
    setRightResize = jest.fn();
    currentPosition = { bottom: 20, right: 20 };
    setCurrentPosition = jest.fn();
    ref = {
      style: {
        width: '120px',
        height: '120px',
      },
    };
    dir = 'bottom';
    delta = { height: 10, width: 10 };
  });

  afterEach(() => jest.clearAllMocks());

  test('should be defined', () => {
    const changeCurrentSize = jest.fn();
    expect(changeSize(changeCurrentSize)).toBeDefined();
  });

  test('should return a function', () => {
    const changeCurrentSize = jest.fn();
    expect(changeSize(changeCurrentSize)).toBeInstanceOf(Function);
  });

  test('should call a  setCurrentPosition function', () => {
    changeSize(changeCurrentSize, setRightResize, currentPosition, setCurrentPosition)(
      null,
      dir,
      ref,
      delta,
    );
    expect(setCurrentPosition).toBeCalled();
  });

  test('should call a setRightResize function', () => {
    changeSize(changeCurrentSize, setRightResize, currentPosition, setCurrentPosition)(
      null,
      dir,
      ref,
      delta,
    );
    expect(setRightResize).toBeCalled();
  });

  test('should call a changeCurrentSize function', () => {
    changeSize(changeCurrentSize, setRightResize, currentPosition, setCurrentPosition)(
      null,
      dir,
      ref,
      delta,
    );
    expect(changeCurrentSize).toBeCalled();
  });
});

describe('setResizeSettings function', () => {
  test('Should not be undefined', () => {
    expect(setResizeSettings).not.toBeUndefined();
  });

  test('Should return object with fields', () => {
    const currentPosition = {
      right: 20,
      bottom: 20,
      top: 20,
      left: 20,
    };
    expect(setResizeSettings({ width: 200, height: 200 }, 120, 120, currentPosition)).toEqual({
      style: {
        right: '20px',
        bottom: '20px',
        top: 'auto',
        left: 'auto',
        position: 'fixed',
        width: 200,
        height: 200,
      },
      enable: {
        top: true,
        left: true,
        topLeft: true,
        bottom: true,
        bottomLeft: true,
        bottomRight: true,
        right: true,
        topRight: true,
      },
      maxWidth: 100,
      maxHeight: 100,
      minWidth: '350',
      minHeight: '550',
    });
  });

  test('Should return object with fields if isRightResize true', () => {
    const currentPosition = {
      right: 20,
      bottom: 20,
      top: 20,
      left: 20,
    };
    expect(setResizeSettings({ width: 200, height: 200 }, 120, 120, currentPosition, true)).toEqual(
      {
        style: {
          right: 'auto',
          bottom: 'auto',
          top: 20,
          left: 20,
          position: 'fixed',
          width: 200,
          height: 200,
        },
        enable: {
          top: true,
          left: true,
          topLeft: true,
          bottom: true,
          bottomLeft: true,
          bottomRight: true,
          right: true,
          topRight: true,
        },
        maxWidth: 100,
        maxHeight: 100,
        minWidth: '350',
        minHeight: '550',
      },
    );
  });
  test('Should return object with fields if windowCurrentWidth > 1800', () => {
    const currentPosition = {
      right: 20,
      bottom: 20,
      top: 20,
      left: 20,
    };
    expect(
      setResizeSettings({ width: 200, height: 200 }, 3000, 3000, currentPosition, true),
    ).toEqual({
      style: {
        right: 'auto',
        bottom: 'auto',
        top: 20,
        left: 20,
        position: 'fixed',
        width: 200,
        height: 200,
      },
      enable: {
        top: true,
        left: true,
        topLeft: true,
        bottom: true,
        bottomLeft: true,
        bottomRight: true,
        right: true,
        topRight: true,
      },
      maxWidth: 2980,
      maxHeight: 2980,
      minWidth: '400',
      minHeight: '670',
    });
  });
});

describe('setWidth function', () => {
  test('should be defined', () => {
    const setCurrentWidth = jest.fn();
    const setCurrentHeight = jest.fn();
    expect(setWidth(setCurrentWidth, setCurrentHeight)).toBeDefined();
  });

  test('should return a function', () => {
    const setCurrentWidth = jest.fn();
    const setCurrentHeight = jest.fn();
    expect(setWidth(setCurrentWidth, setCurrentHeight)).toBeInstanceOf(Function);
  });

  test('should called a functions', () => {
    const setCurrentWidth = jest.fn();
    const setCurrentHeight = jest.fn();
    const ref = {
      style: {
        width: '120px',
        height: '120px',
      },
    };
    setWidth(setCurrentWidth, setCurrentHeight)(null, null, ref);
    expect(setCurrentWidth).toBeCalled();
    expect(setCurrentHeight).toBeCalled();
  });
});

describe('toggleFullScreenHelper function', () => {
  test('should be defined', () => {
    const setImageLink = jest.fn();
    const isFullScreenImage = false;
    const setFullScreenImage = jest.fn();
    expect(
      toggleFullScreenHelper(setFullScreenImage, isFullScreenImage, setImageLink),
    ).toBeDefined();
  });

  test('should return a function', () => {
    const setImageLink = jest.fn();
    const isFullScreenImage = false;
    const setFullScreenImage = jest.fn();
    expect(
      toggleFullScreenHelper(setFullScreenImage, isFullScreenImage, setImageLink),
    ).toBeInstanceOf(Function);
  });

  test('should called a functions', () => {
    const setImageLink = jest.fn();
    const isFullScreenImage = false;
    const setFullScreenImage = jest.fn();
    const link = 'custom link';
    toggleFullScreenHelper(setFullScreenImage, isFullScreenImage, setImageLink)(link);
    expect(setImageLink).toBeCalled();
    expect(setFullScreenImage).toBeCalled();
  });
});

describe('setTopLeftPosition  function', () => {
  const currentSize = {
    width: 200,
    height: 200,
  };
  const windowCurrentHeight = 200;
  const windowCurrentWidth = 200;

  test('should call functions setRightResize and setCurrentPosition', () => {
    const setRightResize = jest.fn();
    const setCurrentPosition = jest.fn();
    setTopLeftPosition(
      currentSize,
      setRightResize,
      setCurrentPosition,
      windowCurrentHeight,
      windowCurrentWidth,
    )({}, 'bottom');
    expect(setRightResize).toBeCalled();
    expect(setCurrentPosition).toBeCalled();
  });
  test('should call functions setRightResize', () => {
    const setRightResize = jest.fn();
    const setCurrentPosition = jest.fn();
    setTopLeftPosition(
      currentSize,
      setRightResize,
      setCurrentPosition,
      windowCurrentHeight,
      windowCurrentWidth,
    )({}, '');
    expect(setRightResize).toBeCalled();
  });
});
