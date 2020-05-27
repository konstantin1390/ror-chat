import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../../Chat';
import BodyWrapper from './StyledBody';
import BotMessage from './BotMessage/BotMessage';
import Typing from './BotMessage/Typing/Typing';
import UserMessage from './UserMessage/UserMessage';
import FastForwardIcon from './FastForwardButton/FastForwardButton';
import { getIconStatus, getLastSugID } from './logic';
import { Scrollbar } from 'react-scrollbars-custom';
import './Body.less';

export const Body = props => {
  const {
    inputHeight,
    isFullScreen,
    logoUrl,
    bodyBackground,
    scrollElement,
    headerHeight,
    logoSize,
    messagesHistory,
    sendMessage,
    isTyping,
    typingGif,
    isClickedOption,
    setIsClickedOption,
    scrollBackground,
    scrollThumbBackground,
    scrollWidth,
  } = props;

  const bodyRef = useRef(null);

  const [isFastForwardButtonVisible, setFastForwardButtonVisibility] = useState(false);
  const changeVisibility = () => {
    if (scrollElement.current) {
      setFastForwardButtonVisibility(
        scrollElement.current.scrollTop < scrollElement.current.scrollHeight - 1000,
      );
    }
  };

  let lastSugID = messagesHistory && getLastSugID(messagesHistory);

  return (
    <BodyWrapper
      ref={bodyRef}
      inputHeight={inputHeight}
      className="Сhat-window__body body"
      logoUrl={logoUrl}
      logoSize={logoSize}
      scrollWidth={scrollWidth}
      scrollBackground={scrollBackground}
      scrollThumbBackground={scrollThumbBackground}
      headerHeight={headerHeight}
      bodyBackground={bodyBackground}
    >
      {isFastForwardButtonVisible && <FastForwardIcon scrollElement={scrollElement} />}

      <Scrollbar ref={scrollElement} onScroll={changeVisibility}>
        <div className="body__box ">
          {messagesHistory &&
            messagesHistory.map((message, index, array) => {
              return (
                <>
                  {message.data.inputText && message.type === 'userMessage' && (
                    <UserMessage
                      setIsClickedOption={setIsClickedOption}
                      value={message.data}
                      hasIcon={getIconStatus(message, array[index - 1])}
                      scrollElement={scrollElement}
                      key={`${index}userMessage`}
                    />
                  )}
                  {message.type === 'botMessage' && (
                    <BotMessage
                      lastSugID={lastSugID}
                      isFullScreen={isFullScreen}
                      setIsClickedOption={setIsClickedOption}
                      isClickedOption={isClickedOption}
                      value={message.data}
                      scrollElement={scrollElement}
                      hasIcon={getIconStatus(message, array[index - 1])}
                      sendMessage={sendMessage}
                      isTyping={isTyping}
                      key={`${index}botMessage`}
                    />
                  )}
                </>
              );
            })}
          <Typing isTyping={isTyping} typingGif={typingGif} />
        </div>
      </Scrollbar>
    </BodyWrapper>
  );
};

Body.propTypes = {
  setIsClickedOption: PropTypes.func,
  isClickedOption: PropTypes.bool,
  logoUrl: PropTypes.string,
  isTyping: PropTypes.bool,
  logoSize: PropTypes.string,
  typingGif: PropTypes.string,
  sendMessage: PropTypes.func,
  headerHeight: PropTypes.string,
  messagesHistory: PropTypes.array,
  bodyBackground: PropTypes.string,
};

export default props => (
  <ChatContext.Consumer>{context => <Body {...props} {...context} />}</ChatContext.Consumer>
);
