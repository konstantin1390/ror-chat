import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../../../Chat';
import Message from './StyledMessage';
import UserIcon from './StyledUserMessage';
import MessageWrapper from './StyledMessageWrapper';
import Time from './Time/Time';
import iconUser from '../../../../../public/images/iconUser.svg';
import './UserMessage.less';

export const UserMessage = props => {
  const {
    value,
    messageColor,
    messageIconUrl,
    scrollElement,
    hasIcon,
    messageBackground,
    messageBorderColor,
    messageIconBackground,
  } = props;

  useEffect(() => {
    setTimeout(() => {
      scrollElement ? (scrollElement.current.scrollTop = scrollElement.current.scrollHeight) : null;
    }, 100);
  }, []);

  return (
    <MessageWrapper className="body__user-message user-message" hasIcon={hasIcon}>
      <div className="user-message__wrapper wrapper">
        {hasIcon && (
          <Time
            time={value.time}
            messageColor={messageColor}
            messageBackground={messageBackground}
            messageBorderColor={messageBorderColor}
          />
        )}
        <Message
          className="wrapper__message message"
          messageColor={messageColor}
          messageBackground={messageBackground}
          messageBorderColor={messageBorderColor}
          hasIcon={hasIcon}
        >
          {value.inputText}
        </Message>
      </div>

      <UserIcon
        className="user-message__icon icon"
        messageIconBackground={messageIconBackground}
        hasIcon={hasIcon}
      >
        <img src={messageIconUrl || iconUser} alt="iconUser" />
      </UserIcon>
    </MessageWrapper>
  );
};

UserMessage.propTypes = {
  value: PropTypes.object.isRequired,
  messageColor: PropTypes.string,
  hasIcon: PropTypes.bool.isRequired,
  messageIconUrl: PropTypes.string,
  messageBackground: PropTypes.string,
  messageBorderColor: PropTypes.string,
  messageIconBackground: PropTypes.string,
};

export default props => (
  <ChatContext.Consumer>{context => <UserMessage {...props} {...context} />}</ChatContext.Consumer>
);
