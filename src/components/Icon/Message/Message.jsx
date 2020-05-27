import React from 'react';
import { ChatContext } from '../../Chat';
import MessageWrapper from './StyledMessage';
import './Message.less';
import localization from '../../../localization';

export const Message = ({ iconMessageText, iconMessageColor, iconMessageBackground, lang }) => (
  <MessageWrapper
    className="sbu-Chat-icon__message sbu-message"
    iconMessageColor={iconMessageColor}
    iconMessageBackground={iconMessageBackground}
    data-icon-message-color={iconMessageColor}
    data-icon-message-background={iconMessageBackground}
  >
    <span className="sbu-message__text">
      {iconMessageText || localization[lang]['icon.text'] || 'Help with deposit?'}
    </span>
  </MessageWrapper>
);

export default props => (
  <ChatContext.Consumer>{context => <Message {...props} {...context} />}</ChatContext.Consumer>
);
