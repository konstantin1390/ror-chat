export default (currentSize, windowCurrentWidth, windowCurrentHeight) => ({
  style: {
    right: '20px',
    bottom: '20px',
    position: 'fixed',
    width: currentSize.width,
    height: currentSize.height,
  },
  enable: {
    top: true,
    left: true,
    topLeft: true,
  },
  maxWidth: windowCurrentWidth - 40,
  maxHeight: windowCurrentHeight - 40,
  minWidth: '320',
  minHeight: '570',
});
