import React from 'react';
import StyledTyping from './StyledTyping';
import './Typing.less';

export default ({ typingGif, isTyping }) => {
  return (
    <>
      {isTyping && (
        <StyledTyping typingGif={typingGif} className="sbu-message__typing">
          {(typingGif && <img src={typingGif} alt="" />) || (
            <div className="sbu-circle">
              <div className="sbu-circleG sbu-first" />
              <div className="sbu-circleG sbu-second" />
              <div className="sbu-circleG sbu-third" />
            </div>
          )}
        </StyledTyping>
      )}
    </>
  );
};
