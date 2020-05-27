import React from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../../Chat';
import HeaderWrapper from './StyledHeader';
import exitImg from '../../../../public/images/drop-down-arrow.svg';

import './Header.less';

export const Header = props => {
  const {
    toggleEnabled,
    headerColor,
    headerHeight,
    changeSizeImg,
    headerBackground,
    toggleFullScreen,
    currentResizeImg,
    isFullScreen,
    headerBorderColor,
  } = props;

  return (
    <HeaderWrapper
      className="Chat-window__header header"
      headerColor={headerColor}
      headerHeight={headerHeight}
      headerBackground={headerBackground}
      headerBorderColor={headerBorderColor}
    >
      <div className="header__wrapper wrapper">
        <span className="wrapper__nav nav">
          <img
            src={currentResizeImg}
            alt="fullScreenSize"
            onClick={() => {
              toggleFullScreen();
              changeSizeImg();
            }}
            style={isFullScreen ? { display: 'initial' } : null}
            className="nav__change-size"
          />
          <img
            className="nav__exit"
            src={exitImg}
            alt="exit"
            onClick={() => {
              toggleEnabled();
            }}
          />
        </span>
        <span className="wrapper__text">{props.children}</span>
      </div>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  headerColor: PropTypes.string,
  headerHeight: PropTypes.string,
  toggleEnabled: PropTypes.func,
  headerBackground: PropTypes.string,
  toggleFullScreen: PropTypes.func,
  isFullScreen: PropTypes.bool,
};

export default props => (
  <ChatContext.Consumer>{context => <Header {...props} {...context} />}</ChatContext.Consumer>
);
