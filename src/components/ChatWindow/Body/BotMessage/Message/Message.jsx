import React, { useEffect } from 'react';
import { ChatContext } from '../../../../Chat';
import { printMessage } from './Logic';
import { scrollDown } from '../../BodyHelper';
import MessageWrapper from './StyleMessage';
import './Message.less';

export const Message = props => {
  const {
    value,
    hasIcon,
    messageColorBot,
    messageBackgroundBot,
    messageBorderColorBot,
    isFullScreen,
    scrollElement,
    linkColor,
    toggleFullScreenHandler,
  } = props;

  useEffect(() => {
    setTimeout(scrollDown(scrollElement), 100);
  }, []);

  return (
    <MessageWrapper
      isFullScreen={isFullScreen}
      value={value}
      hasIcon={hasIcon}
      className="sbu-answer__message sbu-message"
      messageColorBot={messageColorBot}
      messageBackgroundBot={messageBackgroundBot}
      messageBorderColorBot={messageBorderColorBot}
      data-message-color-bot={messageColorBot}
      data-message-background-bot={messageBackgroundBot}
      data-message-border-color-bot={messageBorderColorBot}
      linkColor={linkColor}
    >
      {printMessage(value, isFullScreen, toggleFullScreenHandler)}
    </MessageWrapper>
  );
};

export default props => (
  <ChatContext.Consumer>{context => <Message {...props} {...context} />}</ChatContext.Consumer>
);
