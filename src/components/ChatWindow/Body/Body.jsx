import React, { useState, useRef, useCallback } from 'react';
import { ChatContext } from '../../Chat';
import BodyWrapper from './StyledBody';
import BotMessage from './BotMessage/BotMessage';
import Typing from './BotMessage/Typing/Typing';
import UserMessage from './UserMessage/UserMessage';
import FastForwardIcon from './FastForwardButton/FastForwardButton';
import { getIconStatus, getLastSugID } from './logic';
import { Scrollbar } from 'react-scrollbars-custom';
import { changeVisibilityHandler, scrollDown, checkScroll } from './BodyHelper';
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
    toggleFullScreenHandler,
    currentWidth,
  } = props;

  const bodyRef = useRef(null);

  const [isFastForwardButtonVisible, setFastForwardButtonVisibility] = useState(false);
  const changeVisibility = changeVisibilityHandler(scrollElement, setFastForwardButtonVisibility);

  window.addEventListener(
    'orientationchange',
    useCallback(() => {
      checkScroll(scrollElement, scrollDown);
    }),
  );

  let lastSugID = messagesHistory && getLastSugID(messagesHistory);

  const fastForwardHandler = useCallback(() =>
    setTimeout(() => {
      scrollDown(scrollElement)();
    }, 100),
  );
  return (
    <BodyWrapper
      ref={bodyRef}
      id="body-wrapper"
      className="sbu-Сhat-window__body sbu-body"
      currentWidth={currentWidth}
      logoUrl={logoUrl}
      logoSize={logoSize}
      scrollWidth={scrollWidth}
      scrollBackground={scrollBackground}
      scrollThumbBackground={scrollThumbBackground}
      headerHeight={headerHeight}
      bodyBackground={bodyBackground}
      inputHeight={inputHeight}
      data-logo-url={logoUrl}
      data-logo-size={logoSize}
      data-input-height={inputHeight}
      data-header-height={headerHeight}
      data-body-background={bodyBackground}
    >
      {isFastForwardButtonVisible && <FastForwardIcon fastForwardHandler={fastForwardHandler} />}

      <Scrollbar ref={scrollElement} onScroll={changeVisibility}>
        <div id="body-box" className="sbu-body__box ">
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
                      toggleFullScreenHandler={toggleFullScreenHandler}
                      hasIcon={getIconStatus(message, array[index - 1])}
                      sendMessage={sendMessage}
                      isTyping={isTyping}
                      key={`${index}botMessage`}
                    />
                  )}
                </>
              );
            })}
          <Typing id="typing" isTyping={isTyping} typingGif={typingGif} />
        </div>
      </Scrollbar>
    </BodyWrapper>
  );
};

export default props => (
  <ChatContext.Consumer>{context => <Body {...props} {...context} />}</ChatContext.Consumer>
);
