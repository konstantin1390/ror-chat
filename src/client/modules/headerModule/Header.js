import React from 'react';
import { ExitBtn, Header, HideBtn } from './styledHeader';

const HeaderModule = ({ isFullScreen, toggleFullScreen, refNode }) => {
  return (
    <Header isFullScreen={isFullScreen} ref={refNode}>
      <Header.icon>
        <img src="public/images/chat-icon.svg" alt="chat-icon" />
      </Header.icon>
      <Header.buttons>
        <ExitBtn src="public/images/window-maximize.svg" alt="exit" onClick={toggleFullScreen} />
        <HideBtn src="public/images/arrow-down.svg" alt="fullScreenSize" />
      </Header.buttons>
    </Header>
  );
};

export default HeaderModule;
