import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../Chat';
import WindowWrapper from './StyledChatWindow';
import WindowResize from './Windows/WindowResize';
import fetchResponse from './fetchResponse';
import Window from './Windows/Window';
import maximizeImg from '../../../public/images/window-maximize-regular.svg';
import regularSizeImg from '../../../public/images/window-restore-regular.svg';
import saveMessage from './saveMessage';
import getTime from './getTime';
import './ChatWindow.less';

export const ChatWindow = props => {
  const {
    isFullScreen,
    setMessagesHistory,
    windowBorderColor,
    setIsTyping,
    scrollElement,
    windowCurrentWidth,
    keyAPI,
    headerHeight,
    logoUrl,
    logoSize,
    bodyBackground,
  } = props;

  const addMessage = useCallback(value => {
    setIsTyping(true);
    scrollElement.current.scrollTop = scrollElement.current.scrollHeight;
    if (value.data.type !== 'typing') {
      value.data.responseActions && setIsClickedOption(false);
      !value.data.nextResponse && setIsTyping(false);
      setMessagesHistory(messagesHistory => [...messagesHistory, value]);
    }
  });

  useEffect(() => {
    const history = sessionStorage.getItem('chat-history');
    if (!history) sendMessage('hello', true);
  }, []);

  const sendMessage = (value, isFirst) => {
    if (value.trim() === '') return;
    value = value
      .split('\n')
      .filter(item => item !== '')
      .join('\n');
    const message = {
      type: 'userMessage',
      data: {
        inputText: value,
        userID: '42gpj3',
        clientData: '3956946',
        userSubscription: null,
        payload: keyAPI || 'UYFIX7PQ5274UZH2XLJT',
        time: getTime(),
      },
    };
    saveMessage(message);
    fetchResponse(message.data, addMessage);

    !isFirst && addMessage(message);
  };

  const [currentResizeImg, setCurrentResizeImg] = useState(
    isFullScreen ? regularSizeImg : maximizeImg,
  );
  const changeSizeImg = useCallback(() =>
    currentResizeImg === maximizeImg
      ? setCurrentResizeImg(regularSizeImg)
      : setCurrentResizeImg(maximizeImg),
  );

  const { width, height } = (sessionStorage.getItem('currentSize') &&
    JSON.parse(sessionStorage.getItem('currentSize'))) || { width: null, height: null };
  const [currentSize, setCurrentSize] = useState(
    windowCurrentWidth > 1800
      ? {
          width: width || 380,
          height: height || 670,
        }
      : {
          width: width || 320,
          height: height || 550,
        },
  );
  const changeCurrentSize = (width, height) => {
    sessionStorage.setItem('currentSize', JSON.stringify({ width, height }));
    setCurrentSize({ width, height });
  };

  const [currentWidth, setCurrentWidth] = useState(320);
  const [currentHeight, setCurrentHeight] = useState(550);

  const [inputValue, setInputValue] = useState('');

  const [inputHeight, setInputHeight] = useState(16);

  const [isClickedOption, setIsClickedOption] = useState(false);
  console.log(currentSize);
  return (
    <WindowWrapper
      logoUrl={logoUrl}
      logoSize={logoSize}
      bodyBackground={bodyBackground}
      headerHeight={headerHeight}
      isFullScreen={isFullScreen}
      className="Сhat-window"
      currentHeight={currentHeight}
      currentWidth={currentWidth}
      windowBorderColor={windowBorderColor}
    >
      {!isFullScreen && windowCurrentWidth > 1366 ? (
        <WindowResize
          {...props}
          setCurrentHeight={setCurrentHeight}
          currentSize={currentSize}
          changeCurrentSize={changeCurrentSize}
          isClickedOption={isClickedOption}
          setIsClickedOption={setIsClickedOption}
          scrollElement={scrollElement}
          inputHeight={inputHeight}
          setInputHeight={setInputHeight}
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
          isClickedOption={isClickedOption}
          setIsClickedOption={setIsClickedOption}
          inputHeight={inputHeight}
          setInputHeight={setInputHeight}
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

ChatWindow.propTypes = {
  isTyping: PropTypes.bool,
  addMessage: PropTypes.func,
  headerText: PropTypes.string,
  currentSize: PropTypes.object,
  windowWidth: PropTypes.string,
  windowHeight: PropTypes.string,
  isFullScreen: PropTypes.bool,
  setFullScreen: PropTypes.func,
  toggleEnabled: PropTypes.func,
  messagesHistory: PropTypes.array,
  toggleFullScreen: PropTypes.func,
  changeCurrentSize: PropTypes.func,
  windowBorderColor: PropTypes.string,
  windowCurrentWidth: PropTypes.number,
  windowCurrentHeight: PropTypes.number,
};

export default props => (
  <ChatContext.Consumer>{context => <ChatWindow {...props} {...context} />}</ChatContext.Consumer>
);
