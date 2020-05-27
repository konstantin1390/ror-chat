import React from 'react';
import StyledTime from './StyledTime';

const Time = props => {
  const {
    time,
    value,
    messageColorBot,
    messageBackgroundBot,
    messageBorderColorBot,
    botName,
  } = props;

  return (
    <StyledTime
      value={value}
      messageColorBot={messageColorBot}
      messageBackgroundBot={messageBackgroundBot}
      messageBorderColorBot={messageBorderColorBot}
      data-message-color-bot={messageColorBot}
      data-message-background-bot={messageBackgroundBot}
      data-message-border-color-bot={messageBorderColorBot}
    >
      {botName || 'Umi'} {time}
    </StyledTime>
  );
};

export default Time;
