import React from 'react';
import { ExitBtn, Header, HideBtn } from './styledHeader';

const HeaderModule = ({ toggleFullScreen, refNode }) => {
  return (
    <Header ref={refNode}>
      <Header.icon>
        <img src="public/images/chat-icon.svg" alt="chat-icon" />
      </Header.icon>
      <Header.buttons>
        <ExitBtn src="public/images/window-maximize.svg" alt="exit" />
        <HideBtn src="public/images/arrow-down.svg" alt="fullScreenSize" />
      </Header.buttons>
    </Header>
  );
};

export default HeaderModule;
