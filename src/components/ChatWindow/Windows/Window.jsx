import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import localization from '../../../localization';

export default props => {
  const {
    inputHeight,
    setInputHeight,
    inputValue,
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
  } = props;

  return (
    <>
      <Header
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
        inputHeight={inputHeight}
        scrollElement={scrollElement}
        isFullScreen={isFullScreen}
        setIsClickedOption={setIsClickedOption}
        isClickedOption={isClickedOption}
        messagesHistory={messagesHistory}
        sendMessage={sendMessage}
        isTyping={isTyping}
      />
      <Footer
        lang={lang}
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
