import React, { useCallback, useState } from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import localization from '../../../localization';
import { exitImage } from '../../../constants';
import { toggleFullScreenHelper } from './WindowsHelper';
import '../Body/BotMessage/Message/Image/Image.less';

export default props => {
  const {
    inputHeight,
    setInputHeight,
    inputValue,
    inputPlaceholder,
    setInputValue,
    headerText,
    addMessage,
    sendMessage,
    toggleEnabled,
    setFullScreen,
    changeSizeImg,
    messagesHistory,
    currentResizeImg,
    toggleFullScreen,
    setIsClickedOption,
    isClickedOption,
    isTyping,
    isFullScreen,
    scrollElement,
    windowCurrentHeight,
    windowCurrentWidth,
    lang,
    drug,
    currentWidth,
    isRightResize,
  } = props;

  const [isFullScreenImage, setFullScreenImage] = useState(false);
  const [imageLink, setImageLink] = useState(false);

  const toggleFullScreenHandler = useCallback(
    toggleFullScreenHelper(setFullScreenImage, isFullScreenImage, setImageLink),
  );

  return (
    <>
      {isFullScreenImage && (
        <div className="sbu-message__image sbu-image">
          <img
            onClick={toggleFullScreenHandler}
            className="sbu-image__exit"
            src={exitImage}
            alt="exit"
          />
          <div onClick={toggleFullScreenHandler} className="sbu-image__background" />
          <img className="sbu-image-full-screen" src={imageLink} alt="ResponseBotImage" />
        </div>
      )}
      <Header
        drug={drug}
        isRightResize={isRightResize}
        currentWidth={currentWidth}
        isFullScreen={isFullScreen}
        changeSizeImg={changeSizeImg}
        toggleEnabled={toggleEnabled}
        setFullScreen={setFullScreen}
        toggleFullScreen={toggleFullScreen}
        currentResizeImg={currentResizeImg}
      >
        {headerText || localization[lang]['title.text']}
      </Header>
      <Body
        data-input-height={inputHeight}
        isRightResize={isRightResize}
        currentWidth={currentWidth}
        inputHeight={inputHeight}
        scrollElement={scrollElement}
        isFullScreen={isFullScreen}
        toggleFullScreenHandler={toggleFullScreenHandler}
        setIsClickedOption={setIsClickedOption}
        isClickedOption={isClickedOption}
        messagesHistory={messagesHistory}
        sendMessage={sendMessage}
        isTyping={isTyping}
      />
      <Footer
        lang={lang}
        isFullScreen={isFullScreen}
        isRightResize={isRightResize}
        currentWidth={currentWidth}
        inputPlaceholder={inputPlaceholder}
        setIsClickedOption={setIsClickedOption}
        windowCurrentHeight={windowCurrentHeight}
        windowCurrentWidth={windowCurrentWidth}
        setInputHeight={setInputHeight}
        addMessage={addMessage}
        scrollElement={scrollElement}
        sendMessage={sendMessage}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </>
  );
};
