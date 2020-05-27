import React, { useState, useEffect, useCallback, useRef } from 'react';
import ChatIcon from './Icon/Icon';
import ChatWindow from './ChatWindow/ChatWindow';
import {
  checkLang,
  toggleEnabledHandler,
  toggleFullScreenHandler,
  resizeHandler,
  setNewPosition,
  throttle,
} from './logic';
import './Chat.less';

export const ChatContext = React.createContext(null);

export const Chat = props => {
  const scrollElement = useRef(null);
  const { settings, lang, clientData } = props;

  const { leftPosition, bottomPosition, rightPosition, hideIcon } = settings;

  const [messagesHistory, setMessagesHistory] = useState(
    JSON.parse(sessionStorage.getItem('sbu-chat-history')) || [],
  );

  const sessionStorageIsEnabled =
    sessionStorage.getItem('sbu-isEnabled') &&
    JSON.parse(sessionStorage.getItem('sbu-isEnabled')).isEnabled;
  const [isEnabled, setEnabled] = useState(sessionStorageIsEnabled || false);
  const toggleEnabled = useCallback(toggleEnabledHandler(setEnabled, isEnabled));

  useEffect(() => {
    window.SmartChatBotApp.hideChatWindow = toggleEnabledHandler(setEnabled, true).bind(this);
    window.SmartChatBotApp.showChatWindow = toggleEnabledHandler(setEnabled, false).bind(this);
  }, []);

  const sessionStorageIsFullScreen =
    sessionStorage.getItem('sbu-isFullScreen') &&
    JSON.parse(sessionStorage.getItem('sbu-isFullScreen')).isFullScreen;
  const [isFullScreen, setFullScreen] = useState(sessionStorageIsFullScreen || false);
  const toggleFullScreen = useCallback(toggleFullScreenHandler(setFullScreen, isFullScreen));

  const [isTyping, setIsTyping] = useState(false);

  const [windowCurrentHeight, setWindowCurrentHeight] = useState(
    document.documentElement.clientHeight,
  );
  const [windowCurrentWidth, setWindowCurrentWidth] = useState(
    document.documentElement.clientWidth,
  );
  window.addEventListener('resize', resizeHandler(setWindowCurrentHeight, setWindowCurrentWidth));

  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', drug);
  });

  const { width, height } = (sessionStorage.getItem('sbu-currentSize') &&
    JSON.parse(sessionStorage.getItem('sbu-currentSize'))) || { width: null, height: null };
  const [currentSize, setCurrentSize] = useState(
    windowCurrentWidth > 1800
      ? {
          width: width || 400,
          height: height || 670,
        }
      : {
          width: width || 350,
          height: height || 550,
        },
  );

  const sessionCurrentPosition =
    sessionStorage.getItem('sbu-currentPosition') &&
    JSON.parse(sessionStorage.getItem('sbu-currentPosition'));

  const horizontalPosition = leftPosition
    ? windowCurrentWidth - currentSize.width - leftPosition
    : rightPosition;
  const [currentPosition, setCurrentPosition] = useState(
    sessionCurrentPosition || { bottom: bottomPosition || 95, right: horizontalPosition || 20 },
  );

  const drug = useCallback(
    throttle(
      e =>
        setNewPosition(
          e,
          currentPosition,
          setCurrentPosition,
          windowCurrentWidth,
          windowCurrentHeight,
        ),
      40,
    ),
  );

  return (
    <ChatContext.Provider value={settings}>
      {!hideIcon && !isEnabled && (
        <ChatIcon
          lang={checkLang(lang)}
          horizontalPosition={horizontalPosition}
          bottomPosition={bottomPosition}
          toggleEnabled={toggleEnabled}
        />
      )}
      {isEnabled && (
        <ChatWindow
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          horizontalPosition={horizontalPosition}
          clientData={clientData}
          lang={checkLang(lang)}
          setEnabled={setEnabled}
          drug={drug}
          setCurrentPosition={setCurrentPosition}
          currentPosition={currentPosition}
          setMessagesHistory={setMessagesHistory}
          setIsTyping={setIsTyping}
          scrollElement={scrollElement}
          isFullScreen={isFullScreen}
          setFullScreen={setFullScreen}
          isTyping={isTyping}
          isEnabled={isEnabled}
          toggleEnabled={toggleEnabled}
          messagesHistory={messagesHistory}
          toggleFullScreen={toggleFullScreen}
          windowCurrentWidth={windowCurrentWidth}
          windowCurrentHeight={windowCurrentHeight}
        />
      )}
    </ChatContext.Provider>
  );
};

Chat.defaultProps = {
  settings: {},
  hasUserAuth: false,
};

export default Chat;
