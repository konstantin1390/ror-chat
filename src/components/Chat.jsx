import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import ChatIcon from './Icon/Icon';
import ChatWindow from './ChatWindow/ChatWindow';
import './Chat.less';

export const ChatContext = React.createContext();

export const Chat = props => {
  const scrollElement = useRef(null);

  const { settings, hasUserAuth, lang } = props;

  const [messagesHistory, setMessagesHistory] = useState(
    JSON.parse(sessionStorage.getItem('chat-history')) || [],
  );

  const sessionStorageIsEnabled =
    sessionStorage.getItem('isEnabled') &&
    JSON.parse(sessionStorage.getItem('isEnabled')).isEnabled;
  const [isEnabled, setEnabled] = useState(sessionStorageIsEnabled || false);
  const toggleEnabled = useCallback(() => {
    sessionStorage.setItem('isEnabled', JSON.stringify({ isEnabled: !isEnabled }));
    setEnabled(!isEnabled);
  });

  const sessionStorageIsFullScreen =
    sessionStorage.getItem('isFullScreen') &&
    JSON.parse(sessionStorage.getItem('isFullScreen')).isFullScreen;
  const [isFullScreen, setFullScreen] = useState(sessionStorageIsFullScreen || false);
  const toggleFullScreen = useCallback(() => {
    sessionStorage.setItem('isFullScreen', JSON.stringify({ isFullScreen: !isFullScreen }));
    setFullScreen(!isFullScreen);
  });

  const [isTyping, setIsTyping] = useState(false);

  !hasUserAuth && sessionStorage.removeItem('chat-history');

  const [windowCurrentHeight, setWindowCurrentHeight] = useState(
    document.documentElement.clientHeight,
  );
  const [windowCurrentWidth, setWindowCurrentWidth] = useState(
    document.documentElement.clientWidth,
  );
  window.addEventListener('resize', () => {
    setWindowCurrentHeight(document.documentElement.clientHeight);
    setWindowCurrentWidth(document.documentElement.clientWidth);
  });

  return (
    <ChatContext.Provider value={settings}>
      {hasUserAuth &&
        (!isEnabled ? (
          <ChatIcon toggleEnabled={toggleEnabled} />
        ) : (
          <ChatWindow
            lang={lang}
            setMessagesHistory={setMessagesHistory}
            setIsTyping={setIsTyping}
            scrollElement={scrollElement}
            isFullScreen={isFullScreen}
            setFullScreen={setFullScreen}
            isTyping={isTyping}
            toggleEnabled={toggleEnabled}
            messagesHistory={messagesHistory}
            toggleFullScreen={toggleFullScreen}
            windowCurrentWidth={windowCurrentWidth}
            windowCurrentHeight={windowCurrentHeight}
          />
        ))}
    </ChatContext.Provider>
  );
};

Chat.propTypes = {
  settings: PropTypes.shape({}),
  hasUserAuth: PropTypes.bool,
};

Chat.defaultProps = {
  settings: {},
  hasUserAuth: false,
};

export default Chat;
