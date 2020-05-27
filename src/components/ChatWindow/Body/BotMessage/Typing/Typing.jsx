import React from 'react';
import './Typing.less';

export default ({ typingGif, isTyping }) => {
  return (
    <>
      {isTyping && (
        <div className="message__typing">
          {(typingGif && <img src={typingGif} alt="" />) || (
            <div className="circle">
              <div className="circleG first" />
              <div className="circleG second" />
              <div className="circleG third" />
            </div>
          )}
        </div>
      )}
    </>
  );
};
