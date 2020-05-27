import React, { useCallback } from 'react';
import { ChatContext } from '../../Chat';
import HeaderWrapper from './StyledHeader';
import { exitImg } from '../../../constants';

import './Header.less';

export const Header = props => {
  const {
    toggleEnabled,
    headerColor,
    headerHeight,
    changeSizeImg,
    currentResizeImg,
    headerBackground,
    toggleFullScreen,
    isFullScreen,
    headerBorderColor,
    drug,
    disableDraggable,
    currentWidth,
    isRightResize,
  } = props;

  const onClickHandler = useCallback(() => {
    toggleFullScreen();
    changeSizeImg();
  });

  const drugStart = useCallback(e => {
    if (!disableDraggable) {
      document.addEventListener('mousemove', drug);
      window.startMousePosition = { x: e.pageX, y: e.pageY };
    }
  });

  return (
    <HeaderWrapper
      className="sbu-Chat-window__header sbu-header"
      isFullScreen={isFullScreen}
      currentWidth={currentWidth}
      isRightResize={isRightResize}
      disableDraggable={disableDraggable}
      headerColor={headerColor}
      headerHeight={headerHeight}
      headerBackground={headerBackground}
      data-header-color={headerColor}
      data-header-height={headerHeight}
      data-header-background={headerBackground}
      headerBorderColor={headerBorderColor}
    >
      <div className="sbu-header__draggable" onMouseDown={drugStart} />
      <div className="sbu-header__header-wrapper sbu-header-wrapper">
        <span className="sbu-header-wrapper__nav sbu-nav">
          <img
            src={currentResizeImg}
            alt="fullScreenSize"
            onClick={onClickHandler}
            style={isFullScreen ? { display: 'initial' } : null}
            id="change-size-button"
            className="sbu-nav__change-size"
          />
          <img
            id="exit-button"
            className="sbu-nav__exit"
            src={exitImg}
            alt="exit"
            onClick={() => {
              toggleEnabled();
            }}
          />
        </span>
        <span id="title-text" className="sbu-header-wrapper__text">
          {props.children}
        </span>
      </div>
    </HeaderWrapper>
  );
};

export default props => (
  <ChatContext.Consumer>{context => <Header {...props} {...context} />}</ChatContext.Consumer>
);
