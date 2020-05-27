import React from 'react';
import StyledTime from './StyledTime';

const Time = props => {
  const { time, messageColor, messageBackground, messageBorderColor } = props;
  return (
    <StyledTime
      messageColor={messageColor}
      messageBackground={messageBackground}
      messageBorderColor={messageBorderColor}
    >
      {time}
    </StyledTime>
  );
};

export default Time;
