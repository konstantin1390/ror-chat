import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../../../../Chat';
import { printMessage } from './Logic';
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
  } = props;

  useEffect(() => {
    setTimeout(() => {
      scrollElement ? (scrollElement.current.scrollTop = scrollElement.current.scrollHeight) : null;
    }, 100);
  }, []);

  return (
    <MessageWrapper
      isFullScreen={isFullScreen}
      value={value}
      hasIcon={hasIcon}
      className="answer__message message"
      messageColorBot={messageColorBot}
      messageBackgroundBot={messageBackgroundBot}
      messageBorderColorBot={messageBorderColorBot}
      linkColor={linkColor}
    >
      {printMessage(value, isFullScreen)}
    </MessageWrapper>
  );
};

Message.propTypes = {
  value: PropTypes.object.isRequired,
  hasIcon: PropTypes.bool.isRequired,
  messageColorBot: PropTypes.string,
  messageBackgroundBot: PropTypes.string,
  messageBorderColorBot: PropTypes.string,
};

export default props => (
  <ChatContext.Consumer>{context => <Message {...props} {...context} />}</ChatContext.Consumer>
);
