export const changeSize = (
  changeCurrentSize,
  setRightResize,
  currentPosition,
  setCurrentPosition,
  setRightTopResize,
  setLeftBottomResize,
) => (e, dir, ref, delta) => {
  let newPosition = currentPosition;
  switch (dir) {
    case 'bottom':
    case 'right':
    case 'bottomRight':
      newPosition = {
        bottom: currentPosition.bottom - delta.height,
        right: currentPosition.right - delta.width,
      };
      break;
    case 'topRight':
      newPosition = {
        bottom: currentPosition.bottom,
        right: currentPosition.right - delta.width,
      };
      break;
    case 'bottomLeft':
      newPosition = {
        bottom: currentPosition.bottom - delta.height,
        right: currentPosition.right,
      };
  }
  changeCurrentSize(parseInt(ref.style.width, 10), parseInt(ref.style.height, 10));
  sessionStorage.setItem('sbu-currentPosition', JSON.stringify(newPosition));
  setCurrentPosition(newPosition);
  setRightResize(false);
  setRightTopResize(false);
  setLeftBottomResize(false);
};

export const setTopLeftPosition = (
  currentSize,
  setRightResize,
  setCurrentPosition,
  windowCurrentHeight,
  windowCurrentWidth,
  setRightTopResize,
  setLeftBottomResize,
) => (e, dir) => {
  window.startMousePosition = { x: e.pageX, y: e.pageY };
  switch (dir) {
    case 'bottom':
    case 'right':
    case 'bottomRight':
      setRightResize(true);
      setCurrentPosition(currentPosition => ({
        ...currentPosition,
        top: windowCurrentHeight - currentPosition.bottom - currentSize.height,
        left: windowCurrentWidth - currentPosition.right - currentSize.width,
      }));
      break;
    case 'topRight':
      setRightTopResize(true);
      setCurrentPosition(currentPosition => ({
        ...currentPosition,
        left: windowCurrentWidth - currentPosition.right - currentSize.width,
      }));
      break;
    case 'bottomLeft':
      setLeftBottomResize(true);
      setCurrentPosition(currentPosition => ({
        ...currentPosition,
        top: windowCurrentHeight - currentPosition.bottom - currentSize.height,
      }));
      break;
    default:
      setRightResize(false);
  }
};

export const setResizeSettings = (
  currentSize,
  windowCurrentWidth,
  windowCurrentHeight,
  currentPosition,
  isRightResize,
  isRightTopResize,
  isLeftBottomResize,
) => ({
  style: {
    right: isRightResize || isRightTopResize ? 'auto' : currentPosition.right + 'px',
    bottom: isRightResize || isLeftBottomResize ? 'auto' : currentPosition.bottom + 'px',
    left: isRightResize || isRightTopResize ? currentPosition.left : 'auto',
    top: isRightResize || isLeftBottomResize ? currentPosition.top : 'auto',
    position: 'fixed',
    width: currentSize.width,
    height: currentSize.height,
  },
  enable: {
    top: true,
    left: true,
    topLeft: true,
    bottomRight: true,
    bottom: true,
    right: true,
    topRight: true,
    bottomLeft: true,
  },
  maxWidth:
    isRightResize || isRightTopResize
      ? windowCurrentWidth - currentPosition.left
      : windowCurrentWidth - currentPosition.right,
  maxHeight:
    isRightResize || isLeftBottomResize
      ? windowCurrentHeight - currentPosition.top
      : windowCurrentHeight - currentPosition.bottom,
  minWidth: windowCurrentWidth > 1800 ? '400' : '350',
  minHeight: windowCurrentWidth > 1800 ? '670' : '550',
});

export const setWidth = (setCurrentWidth, setCurrentHeight) => (e, dir, ref) => {
  setCurrentWidth(parseInt(ref.style.width, 10));
  setCurrentHeight(parseInt(ref.style.height, 10));
  setTimeout(() => {
    setCurrentWidth(parseInt(ref.style.width, 10));
    setCurrentHeight(parseInt(ref.style.height, 10));
  });
};

export const toggleFullScreenHelper = (
  setFullScreenImage,
  isFullScreenImage,
  setImageLink,
) => link => {
  setFullScreenImage(!isFullScreenImage);
  setImageLink(link);
};
