import { setScrollStatus } from '../logic';

export const toggleEnabledHandler = (setEnabled, isEnabled) => () => {
  if (
    (window.innerWidth <= 500 && window.orientation === 0) ||
    (window.innerHeight <= 500 && window.orientation === 90)
  )
    !isEnabled ? setScrollStatus('hidden') : setScrollStatus('auto');

  sessionStorage.setItem('sbu-isEnabled', JSON.stringify({ isEnabled: !isEnabled }));
  setEnabled(!isEnabled);
};

export const toggleFullScreenHandler = (setFullScreen, isFullScreen) => () => {
  sessionStorage.setItem('sbu-isFullScreen', JSON.stringify({ isFullScreen: !isFullScreen }));
  setFullScreen(!isFullScreen);
};

export const resizeHandler = (setWindowCurrentHeight, setWindowCurrentWidth) => () => {
  setWindowCurrentHeight(document.documentElement.clientHeight);
  setWindowCurrentWidth(document.documentElement.clientWidth);
};

export const setNewPosition = (
  e,
  currentPosition,
  setCurrentPosition,
  windowCurrentWidth,
  windowCurrentHeight,
) => {
  const currentSize = (sessionStorage.getItem('sbu-currentSize') &&
    JSON.parse(sessionStorage.getItem('sbu-currentSize'))) || { width: 400, height: 550 };

  const distanceY = window.startMousePosition.y - e.pageY;
  const distanceX = window.startMousePosition.x - e.pageX;

  let newPositionY =
    currentPosition.bottom + distanceY > 0 ? currentPosition.bottom + distanceY : 0;
  let newPositionX = currentPosition.right + distanceX > 0 ? currentPosition.right + distanceX : 0;

  if (windowCurrentHeight - (newPositionY + currentSize.height) < 0)
    newPositionY = windowCurrentHeight - currentSize.height;
  if (windowCurrentWidth - (newPositionX + currentSize.width) < 0)
    newPositionX = windowCurrentWidth - currentSize.width;

  sessionStorage.setItem(
    'sbu-currentPosition',
    JSON.stringify({ bottom: newPositionY, right: newPositionX }),
  );
  setCurrentPosition({ bottom: newPositionY, right: newPositionX });
};

export const throttle = (func, ms) => {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
};

export const checkLang = lang => {
  switch (lang) {
    case 'en':
      return lang;
    case 'es':
      return lang;
    case 'ru':
      return lang;
    case 'de':
      return lang;
    case 'pt':
      return lang;
    default:
      return 'en';
  }
};
