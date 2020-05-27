import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Resizable } from 're-resizable';
import { ChatContext } from '../../Chat';
import Window from './Window';
import setSettings from './setResizeSettings';

export const Resize = props => {
  const {
    currentSize,
    setCurrentWidth,
    setCurrentHeight,
    changeCurrentSize,
    windowCurrentWidth,
    windowCurrentHeight,
  } = props;

  const setCurrentWithHandler = useCallback((e, dir, ref) => {
    setCurrentWidth(parseInt(ref.style.width, 10));
    setCurrentHeight(parseInt(ref.style.height, 10));
  });
  const changeCurrentSizeHandler = useCallback((e, dir, ref) =>
    changeCurrentSize(parseInt(ref.style.width, 10), parseInt(ref.style.height, 10)),
  );

  const resizableRef = useRef(null);
  useEffect(() => setCurrentWidth(parseInt(resizableRef.current.props.style.width, 10)), []);

  return (
    <Resizable
      {...setSettings(currentSize, windowCurrentWidth, windowCurrentHeight)}
      ref={resizableRef}
      onResize={setCurrentWithHandler}
      onResizeStop={changeCurrentSizeHandler}
      defaultSize={{
        width: currentSize.width,
        height: currentSize.height,
      }}
    >
      <Window {...props} />
    </Resizable>
  );
};

Resize.propTypes = {
  currentSize: PropTypes.object,
  setCurrentWidth: PropTypes.func,
  changeCurrentSize: PropTypes.func,
  windowCurrentWidth: PropTypes.number,
  windowCurrentHeight: PropTypes.number,
};

export default props => (
  <ChatContext.Consumer>{context => <Resize {...props} {...context} />}</ChatContext.Consumer>
);
