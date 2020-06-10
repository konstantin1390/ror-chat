import React from 'react';
import { Header } from './styledHeader';

const HeaderModule = ({ refNode }) => {
  return (
    <Header ref={refNode}>
      <Header.icon>
        <img src="public/images/chat-icon.svg" alt="chat-icon" />
      </Header.icon>
    </Header>
  );
};

export default HeaderModule;
