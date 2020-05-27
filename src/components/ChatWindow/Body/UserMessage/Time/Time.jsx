import React from 'react';
import StyledTime from './StyledTime';

const Time = props => {
  const { time, messageColor, messageBackground, messageBorderColor } = props;
  return (
    <StyledTime
      messageColor={messageColor}
      messageBackground={messageBackground}
      messageBorderColor={messageBorderColor}
      data-message-color={messageColor}
      data-message-background={messageBackground}
      data-message-border-color={messageBorderColor}
    >
      {time}
    </StyledTime>
  );
};

export default Time;
