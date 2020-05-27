import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../../../Chat';
import BotMessageIcon from './Icon/BotMessageIcon';
import Message from './Message/Message';
import Option from './Option/Option';
import StyledBotMessage from './StyledBotMessage';
import hasOptions from './hasOptions';
import Time from './Message/Time/Time';

import './BotMessage.less';

export const BotMessage = props => {
  const {
    value,
    sendMessage,
    hasIcon,
    messageColorBot,
    messageIconUrlBot,
    messageBackgroundBot,
    messageBorderColorBot,
    messageIconBackgroundBot,
    fieldColor,
    fieldBackground,
    fieldBorderColor,
    isFullScreen,
    scrollElement,
    setIsClickedOption,
    isClickedOption,
    lastSugID,
    botName,
  } = props;

  useEffect(() => {
    setTimeout(() => {
      scrollElement ? (scrollElement.current.scrollTop = scrollElement.current.scrollHeight) : null;
    }, 100);
  }, []);

  return (
    <StyledBotMessage hasIcon={hasIcon} className="body__bot-message bot-message">
      {hasIcon && !(value.type === 'typing') && (
        <BotMessageIcon
          classNeme="bot-message__icon"
          messageIconUrlBot={messageIconUrlBot}
          messageIconBackgroundBot={messageIconBackgroundBot}
        />
      )}
      {!(value.type === 'typing') && (
        <div className="bot-message__answer answer">
          {hasIcon && value.type !== 'image' && value.type !== 'video' && (
            <Time
              time={value.time}
              value={value}
              botName={botName}
              messageColorBot={messageColorBot}
              messageBackgroundBot={messageBackgroundBot}
              messageBorderColorBot={messageBorderColorBot}
            />
          )}
          <Message
            value={value}
            className="answer__message"
            isFullScreen={isFullScreen}
            hasIcon={hasIcon}
            scrollElement={scrollElement}
            messageColorBot={messageColorBot}
            messageBackgroundBot={messageBackgroundBot}
            messageBorderColorBot={messageBorderColorBot}
          />

          {!isClickedOption && (
            <div className="answer__options options">
              {hasOptions(value.responseID, lastSugID) &&
                value.responseActions &&
                value.responseActions.map((answer, index) => (
                  <Option
                    key={`${index}option`}
                    answer={answer}
                    sendMessage={sendMessage}
                    fieldColor={fieldColor}
                    hasIcon={hasIcon}
                    fieldBackground={fieldBackground}
                    fieldBorderColor={fieldBorderColor}
                    setIsClickedOption={setIsClickedOption}
                  />
                ))}
            </div>
          )}
        </div>
      )}
    </StyledBotMessage>
  );
};

BotMessage.propTypes = {
  value: PropTypes.object.isRequired,
  isTyping: PropTypes.bool,
  fieldColor: PropTypes.string,
  sendMessage: PropTypes.func,
  hasIcon: PropTypes.bool.isRequired,
  fieldBackground: PropTypes.string,
  messageColorBot: PropTypes.string,
  isClickedOption: PropTypes.bool,
  setIsClickedOption: PropTypes.func,
  fieldBorderColor: PropTypes.string,
  messageIconUrlBot: PropTypes.string,
  messageBackgroundBot: PropTypes.string,
  messageBorderColorBot: PropTypes.string,
  messageIconBackgroundBot: PropTypes.string,
};

export default props => (
  <ChatContext.Consumer>{context => <BotMessage {...props} {...context} />}</ChatContext.Consumer>
);
