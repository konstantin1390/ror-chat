import React, { useState, useCallback, useEffect } from 'react';
import { ChatContext } from '../Chat';
import WindowWrapper from './StyledChatWindow';
import WindowResize from './Windows/WindowResize';
import fetchResponse from './logic/fetchResponse';
import Window from './Windows/Window';
import { maximizeImg } from '../../constants';
import { regularSizeImg } from '../../constants';
import getSettingsAPI from './logic/getSettingsAPI';
import {
  getHistory,
  addMessageHandler,
  sendMessageHandler,
  changeSizeImgHandler,
  onWindowResizeHelper,
  changeCurrentSizeHandler,
} from './logic/ChatWindowHelper';
import './ChatWindow.less';

export const ChatWindow = props => {
  const {
    isFullScreen,
    setMessagesHistory,
    windowBorderColor,
    setIsTyping,
    scrollElement,
    windowCurrentWidth,
    windowCurrentHeight,
    statusAPI,
    clientData,
    headerHeight,
    logoUrl,
    logoSize,
    bodyBackground,
    drug,
    currentPosition,
    setEnabled,
    setCurrentPosition,
    isEnabled,
    bottomPosition,
    horizontalPosition,
    currentSize,
    setCurrentSize,
  } = props;

  const [isClickedOption, setIsClickedOption] = useState(false);

  const addMessage = useCallback(
    addMessageHandler(setIsTyping, scrollElement, setIsClickedOption, setMessagesHistory),
  );
  let settingsAPI = getSettingsAPI(statusAPI, clientData);
  const sendMessage = useCallback(sendMessageHandler(settingsAPI, addMessage, fetchResponse));

  useEffect(getHistory(sendMessage), []);

  const [currentResizeImg, setCurrentResizeImg] = useState(
    isFullScreen ? regularSizeImg : maximizeImg,
  );
  const changeSizeImg = useCallback(
    changeSizeImgHandler(currentResizeImg, setCurrentResizeImg, regularSizeImg, maximizeImg),
  );

  const changeCurrentSize = changeCurrentSizeHandler(setCurrentSize);

  const [currentWidth, setCurrentWidth] = useState(currentSize.width);
  const [currentHeight, setCurrentHeight] = useState(currentSize.height);

  const [inputValue, setInputValue] = useState('');

  const [inputHeight, setInputHeight] = useState(16);

  useEffect(
    onWindowResizeHelper(
      currentWidth,
      windowCurrentWidth,
      setCurrentWidth,
      setCurrentHeight,
      changeCurrentSize,
      setEnabled,
    ),
    [windowCurrentWidth],
  );

  useEffect(() => {
    if (
      windowCurrentWidth < 800 ||
      windowCurrentWidth - (currentPosition.right + currentSize.width) < 0 ||
      windowCurrentHeight - (currentPosition.bottom + currentSize.height) < 0
    ) {
      sessionStorage.setItem(
        'sbu-currentPosition',
        JSON.stringify({ bottom: bottomPosition || 95, right: horizontalPosition || 20 }),
      );
      setCurrentPosition({ bottom: bottomPosition || 95, right: horizontalPosition || 20 });
    }
  }, [windowCurrentWidth]);

  const [isRightResize, setRightResize] = useState(false);
  const [isRightTopResize, setRightTopResize] = useState(false);
  const [isLeftBottomResize, setLeftBottomResize] = useState(false);

  return (
    <WindowWrapper
      logoUrl={logoUrl}
      logoSize={logoSize}
      isEnabled={isEnabled}
      isRightResize={isRightResize}
      isRightTopResize={isRightTopResize}
      isLeftBottomResize={isLeftBottomResize}
      currentPosition={currentPosition}
      bodyBackground={bodyBackground}
      headerHeight={headerHeight}
      isFullScreen={isFullScreen}
      className="sbu-Сhat-window"
      data-header-height={headerHeight}
      currentHeight={currentHeight}
      currentWidth={currentWidth}
      windowBorderColor={windowBorderColor}
      currentSize={currentSize}
      data-window-border-color={windowBorderColor}
      windowCurrentHeight={windowCurrentHeight}
      windowCurrentWidth={windowCurrentWidth}
    >
      {!isFullScreen && windowCurrentWidth > 1366 && windowCurrentHeight > 500 ? (
        <WindowResize
          {...props}
          drug={drug}
          isFullScreen={isFullScreen}
          isRightResize={isRightResize}
          isRightTopResize={isRightTopResize}
          isLeftBottomResize={isLeftBottomResize}
          setRightResize={setRightResize}
          setRightTopResize={setRightTopResize}
          setLeftBottomResize={setLeftBottomResize}
          currentWidth={currentWidth}
          currentHeight={currentHeight}
          setCurrentPosition={setCurrentPosition}
          currentPosition={currentPosition}
          setCurrentHeight={setCurrentHeight}
          currentSize={currentSize}
          changeCurrentSize={changeCurrentSize}
          isClickedOption={isClickedOption}
          setIsClickedOption={setIsClickedOption}
          scrollElement={scrollElement}
          data-input-height={inputHeight}
          inputHeight={inputHeight}
          setInputHeight={setInputHeight}
          data-input-value={inputValue}
          inputValue={inputValue}
          setInputValue={setInputValue}
          sendMessage={sendMessage}
          changeSizeImg={changeSizeImg}
          setCurrentWidth={setCurrentWidth}
          currentResizeImg={currentResizeImg}
        />
      ) : (
        <Window
          {...props}
          drug={drug}
          isFullScreen={isFullScreen}
          currentWidth={currentWidth}
          data-input-height={inputHeight}
          isClickedOption={isClickedOption}
          setIsClickedOption={setIsClickedOption}
          inputHeight={inputHeight}
          setInputHeight={setInputHeight}
          data-input-value={inputValue}
          inputValue={inputValue}
          setInputValue={setInputValue}
          currentResizeImg={currentResizeImg}
          changeSizeImg={changeSizeImg}
          sendMessage={sendMessage}
        />
      )}
    </WindowWrapper>
  );
};

export default props => (
  <ChatContext.Consumer>{context => <ChatWindow {...props} {...context} />}</ChatContext.Consumer>
);
