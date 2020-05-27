import React, { useEffect, useRef, useCallback } from 'react';
import { Resizable } from 're-resizable';
import { ChatContext } from '../../Chat';
import Window from './Window';
import { setWidth, changeSize, setResizeSettings, setTopLeftPosition } from './WindowsHelper';

Object.defineProperty(Resizable.prototype, 'base', {
  set: () => {},
  get: () => {},
});

export const Resize = props => {
  const {
    currentSize,
    setCurrentWidth,
    setCurrentHeight,
    changeCurrentSize,
    windowCurrentWidth,
    windowCurrentHeight,
    currentPosition,
    setCurrentPosition,
    isRightResize,
    setRightResize,
    isRightTopResize,
    setRightTopResize,
    isLeftBottomResize,
    setLeftBottomResize,
  } = props;

  const setCurrentWithHandler = useCallback(
    setWidth(setCurrentWidth, setCurrentHeight, currentPosition, setCurrentPosition),
  );

  const changeCurrentSizeHandler = useCallback(
    changeSize(
      changeCurrentSize,
      setRightResize,
      currentPosition,
      setCurrentPosition,
      setRightTopResize,
      setLeftBottomResize,
    ),
  );

  const onResizeStartHandler = useCallback(
    setTopLeftPosition(
      currentSize,
      setRightResize,
      setCurrentPosition,
      windowCurrentHeight,
      windowCurrentWidth,
      setRightTopResize,
      setLeftBottomResize,
    ),
  );

  const resizableRef = useRef(null);
  useEffect(() => setCurrentWidth(parseInt(resizableRef.current.props.style.width, 10)), []);

  return (
    <Resizable
      className="sbu-Resizable"
      {...setResizeSettings(
        currentSize,
        windowCurrentWidth,
        windowCurrentHeight,
        currentPosition,
        isRightResize,
        isRightTopResize,
        isLeftBottomResize,
      )}
      ref={resizableRef}
      onResize={setCurrentWithHandler}
      onResizeStop={changeCurrentSizeHandler}
      onResizeStart={onResizeStartHandler}
      defaultSize={{
        width: currentSize.width,
        height: currentSize.height,
      }}
    >
      <Window {...props} />
    </Resizable>
  );
};

export default props => (
  <ChatContext.Consumer>{context => <Resize {...props} {...context} />}</ChatContext.Consumer>
);
