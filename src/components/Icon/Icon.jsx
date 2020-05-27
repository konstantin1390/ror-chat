import React from 'react';
import Avatar from './Avatar/Avatar';
import Message from './Message/Message';
import StyledChatIcon from './StyledChatIcon';
import './Icon.less';

const ChatIcon = ({ toggleEnabled, horizontalPosition, bottomPosition, lang }) => (
  <StyledChatIcon
    className="sbu-Chat-icon"
    horizontalPosition={horizontalPosition}
    bottomPosition={bottomPosition}
  >
    <Message className="sbu-Chat-icon__message" lang={lang} />
    <Avatar className="sbu-Chat-icon__avatar" toggleEnabled={toggleEnabled} />
  </StyledChatIcon>
);

export default ChatIcon;
