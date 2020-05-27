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
    >
      {botName || 'Umi'} {time}
    </StyledTime>
  );
};

export default Time;
