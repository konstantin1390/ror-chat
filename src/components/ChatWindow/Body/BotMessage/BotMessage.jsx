import React, { useEffect } from 'react';
import { ChatContext } from '../../../Chat';
import BotMessageIcon from './Icon/BotMessageIcon';
import Message from './Message/Message';
import Option from './Option/Option';
import StyledBotMessage from './StyledBotMessage';
import hasOptions from './hasOptions';
import Time from './Message/Time/Time';
import { scrollDown } from '../BodyHelper';

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
    isLastMessage,
    lastSugID,
    botName,
    toggleFullScreenHandler,
  } = props;

  useEffect(() => {
    setTimeout(scrollDown(scrollElement), 100);
  }, []);

  return (
    <StyledBotMessage
      hasIcon={hasIcon}
      data-last-message={isLastMessage}
      className="sbu-body__bot-message sbu-bot-message"
    >
      {hasIcon && !(value.type === 'typing') && (
        <BotMessageIcon
          id="bot-icon"
          className="sbu-bot-message__icon"
          messageIconUrlBot={messageIconUrlBot}
          messageIconBackgroundBot={messageIconBackgroundBot}
        />
      )}
      {!(value.type === 'typing') && (
        <div id="bot-answer" className="sbu-bot-message__answer sbu-answer">
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
            id="message-answer"
            className="sbu-answer__message"
            isFullScreen={isFullScreen}
            hasIcon={hasIcon}
            toggleFullScreenHandler={toggleFullScreenHandler}
            scrollElement={scrollElement}
            messageColorBot={messageColorBot}
            messageBackgroundBot={messageBackgroundBot}
            messageBorderColorBot={messageBorderColorBot}
            data-message-color-bot={messageColorBot}
            data-message-background-bot={messageBackgroundBot}
            data-message-border-color-bot={messageBorderColorBot}
          />

          {!isClickedOption && (
            <div id="answer-options" className="sbu-answer__options sbu-options">
              {hasOptions(value.responseID, lastSugID) &&
                value.responseActions &&
                value.responseActions.map((answer, index) => (
                  <Option
                    key={`${index}option`}
                    answer={answer}
                    sendMessage={sendMessage}
                    hasIcon={hasIcon}
                    fieldColor={fieldColor}
                    fieldBackground={fieldBackground}
                    fieldBorderColor={fieldBorderColor}
                    data-field-color={fieldColor}
                    data-field-background={fieldBackground}
                    data-field-border-color={fieldBorderColor}
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

export default props => (
  <ChatContext.Consumer>{context => <BotMessage {...props} {...context} />}</ChatContext.Consumer>
);
