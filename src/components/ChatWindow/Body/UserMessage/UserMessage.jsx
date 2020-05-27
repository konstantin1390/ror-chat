import React, { useEffect } from 'react';
import { ChatContext } from '../../../Chat';
import Message from './StyledMessage';
import UserIcon from './StyledUserMessage';
import MessageWrapper from './StyledMessageWrapper';
import MessageBlock from './StyledMessageBlock';
import Time from './Time/Time';
import { iconUser } from '../../../../constants';
import { scrollDown } from '../BodyHelper';
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
    setTimeout(scrollDown(scrollElement), 100);
  }, []);

  return (
    <MessageWrapper className="sbu-body__user-message sbu-user-message" hasIcon={hasIcon}>
      <MessageBlock className="sbu-user-message__wrapper sbu-wrapper" hasIcon={hasIcon}>
        {hasIcon && (
          <Time
            time={value.time}
            messageColor={messageColor}
            messageBackground={messageBackground}
            messageBorderColor={messageBorderColor}
            data-message-color={messageColor}
            data-message-background={messageBackground}
            data-message-border-color={messageBorderColor}
          />
        )}
        <Message
          className="sbu-wrapper__message sbu-message"
          messageColor={messageColor}
          messageBackground={messageBackground}
          messageBorderColor={messageBorderColor}
          hasIcon={hasIcon}
          data-message-color={messageColor}
          data-message-background={messageBackground}
          data-message-border-color={messageBorderColor}
        >
          {value.inputText}
        </Message>
      </MessageBlock>

      <UserIcon
        id="user-icon"
        hasIcon={hasIcon}
        className="sbu-user-message__icon sbu-icon"
        messageIconBackground={messageIconBackground}
        data-message-icon-background={messageIconBackground}
      >
        <img src={messageIconUrl || iconUser} alt="iconUser" />
      </UserIcon>
    </MessageWrapper>
  );
};

export default props => (
  <ChatContext.Consumer>{context => <UserMessage {...props} {...context} />}</ChatContext.Consumer>
);
