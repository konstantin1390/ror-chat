import { maximizeImg } from '../../../constants';
import { regularSizeImg } from '../../../constants';

export const addMessageHandler = (
  setIsTyping,
  scrollElement,
  setIsClickedOption,
  setMessagesHistory,
) => value => {
  setIsTyping(true);
  scrollElement.current.scrollTop = scrollElement.current.scrollHeight;
  if (value.data.type !== 'typing') {
    value.data.responseActions && setIsClickedOption(false);
    !value.data.nextResponse && setIsTyping(false);
    !value.data.nextResponse && (value.data.lastMessage = true);
    setMessagesHistory(saveHistory(value));
  }
};

export const sendMessageHandler = (settingsAPI, addMessage, fetchResponse) => (value, isFirst) => {
  if (value.trim() === '') return;
  value = value
    .split('\n')
    .filter(item => item !== '')
    .join('\n');
  const message = {
    type: 'userMessage',
    data: {
      inputText: value,
      userID: settingsAPI.userID,
      clientData: settingsAPI.clientData,
      userSubscription: null,
      payload: settingsAPI.key,
      time: getTime(),
    },
  };
  saveMessage(message);
  fetchResponse(message.data, addMessage, settingsAPI);
  !isFirst && addMessage(message);
};

export const saveHistory = value => messagesHistory => [...messagesHistory, value];

export const changeCurrentSizeHandler = setCurrentSize => (width, height) => {
  sessionStorage.setItem('sbu-currentSize', JSON.stringify({ width, height }));
  setCurrentSize({ width, height });
};

export const changeSizeImgHandler = (currentResizeImg, setCurrentResizeImg) => () => {
  currentResizeImg === maximizeImg
    ? setCurrentResizeImg(regularSizeImg)
    : setCurrentResizeImg(maximizeImg);
};

export const getHistory = sendMessage => () => {
  const history = sessionStorage.getItem('sbu-chat-history');
  if (!history) sendMessage('hello', true);
};

export const getTime = () => {
  const date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  if (hour < 10) hour = '0' + hour;
  if (minutes < 10) minutes = '0' + minutes;
  return `${hour}:${minutes}`;
};

export const saveMessage = message => {
  let history = sessionStorage.getItem('sbu-chat-history');
  history = history && JSON.parse(history);
  if (history)
    sessionStorage.setItem('sbu-chat-history', history && JSON.stringify([...history, message]));
  else sessionStorage.setItem('sbu-chat-history', JSON.stringify([]));
};

export const onWindowResizeHelper = (
  currentWidth,
  windowCurrentWidth,
  setCurrentWidth,
  setCurrentHeight,
  changeCurrentSize,
  setEnabled,
) => () => {
  if (currentWidth > windowCurrentWidth && windowCurrentWidth > 500) {
    setEnabled(false);
    if (windowCurrentWidth > 1800) {
      setCurrentWidth(400);
      setCurrentHeight(670);
      changeCurrentSize(400, 670);
    } else {
      setCurrentWidth(350);
      setCurrentHeight(550);
      changeCurrentSize(350, 550);
    }
  }
};
