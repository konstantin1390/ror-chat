import {
  getTime,
  getHistory,
  saveHistory,
  saveMessage,
  addMessageHandler,
  sendMessageHandler,
  onWindowResizeHelper,
  changeSizeImgHandler,
  changeCurrentSizeHandler,
} from '../logic/ChatWindowHelper';
import { maximizeImg } from '../../../constants';
import { regularSizeImg } from '../../../constants';

describe('scrollDown function', () => {
  const setIsTyping = jest.fn();
  const setIsClickedOption = jest.fn();
  const setMessagesHistory = jest.fn();
  const scrollElement = {
    current: {
      scrollTop: 10,
      scrollHeight: 100,
    },
  };
  const value = {
    type: 'botMessage',
    data: {
      type: 'text',
      responseActions: 'actions',
    },
  };

  test('should called functions', () => {
    addMessageHandler(setIsTyping, scrollElement, setIsClickedOption, setMessagesHistory)(value);
    expect(setIsTyping).toBeCalled();
    expect(setIsClickedOption).toBeCalled();
    expect(setMessagesHistory).toBeCalled();
  });

  test('should return a function', () => {
    expect(
      addMessageHandler(setIsTyping, scrollElement, setIsClickedOption, setMessagesHistory),
    ).toBeInstanceOf(Function);
  });

  test('should return undefined', () => {
    expect(
      addMessageHandler(setIsTyping, scrollElement, setIsClickedOption, setMessagesHistory)(value),
    ).toBeUndefined();
  });

  describe('saveHistory function', () => {
    test('should return new message history', () => {
      const messageHistory = [1, 2, 3];
      const value = 4;
      expect(saveHistory(value)(messageHistory)).toEqual([1, 2, 3, 4]);
    });
  });
});

describe('changeCurrentSizeHandler function', () => {
  global.sessionStorage = jest.fn();
  global.sessionStorage.setItem = jest.fn((key, value) => (global.sessionStorage[key] = value));
  global.sessionStorage.getItem = jest.fn(key => global.sessionStorage[key]);
  const width = 200;
  const height = 200;
  test('should return a function', () => {
    const setCurrentSize = jest.fn();
    expect(changeCurrentSizeHandler(setCurrentSize)).toBeInstanceOf(Function);
  });

  test('should call function and  currentSize', () => {
    const setCurrentSize = jest.fn();
    changeCurrentSizeHandler(setCurrentSize)(width, height);
    expect(setCurrentSize).toBeCalled();
  });

  test('should set sessionStorage', () => {
    const setCurrentSize = jest.fn();
    changeCurrentSizeHandler(setCurrentSize)(width, height);
    expect(JSON.parse(global.sessionStorage.getItem('sbu-currentSize')).width).toBe(200);
    expect(JSON.parse(global.sessionStorage.getItem('sbu-currentSize')).height).toBe(200);
  });
});

describe('changeSizeImgHandler function', () => {
  test('Should call function setCurrentResizeImg ', () => {
    const currentResizeImg = maximizeImg;
    const setCurrentResizeImg = jest.fn();
    changeSizeImgHandler(currentResizeImg, setCurrentResizeImg)();
    expect(setCurrentResizeImg).toBeCalled();
  });

  test('Should set another img', () => {
    let currentResizeImg = regularSizeImg;
    const setCurrentResizeImg = jest.fn(img => (currentResizeImg = img));
    changeSizeImgHandler(currentResizeImg, setCurrentResizeImg)();
    expect(currentResizeImg).toBe(maximizeImg);
  });
});

describe('getHistory function', () => {
  global.sessionStorage = jest.fn();
  global.sessionStorage.setItem = jest.fn((key, value) => (global.sessionStorage[key] = value));
  global.sessionStorage.getItem = jest.fn(key => global.sessionStorage[key]);

  test('should return a function', () => {
    const sendMessage = jest.fn();
    expect(getHistory(sendMessage)).toBeInstanceOf(Function);
  });

  test('should don`t call function', () => {
    const sendMessage = jest.fn();
    getHistory(sendMessage)();
    expect(sendMessage).toBeCalled();
  });

  test('should call function', () => {
    const sendMessage = jest.fn();
    global.sessionStorage.setItem('sbu-chat-history', 'true');
    getHistory(sendMessage)();
    expect(sendMessage).not.toBeCalled();
  });
});

describe('getTime function', () => {
  test('Should return truthy', () => {
    expect(getTime()).toBeTruthy();
    expect(getTime()).not.toBeFalsy();
    expect(getTime()).not.toBeUndefined();
    expect(getTime()).not.toBeNaN();
    expect(getTime()).not.toBeNull();
  });

  test('Should return current date  in format hours:minutes', () => {
    const __mockGetTime__ = () => {
      const date = new Date();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      if (hour < 10) hour = '0' + hour;
      if (minutes < 10) minutes = '0' + minutes;
      return `${hour}:${minutes}`;
    };
    expect(getTime()).toBe(__mockGetTime__());
  });
});

describe('saveMessage function', () => {
  test('Should not be undefined', () => {
    expect(saveMessage).not.toBeUndefined();
  });

  test('Should return object with fields', () => {
    sessionStorage.clear();
    saveMessage({ message: 'message' });
    const sessionChatHistory = sessionStorage.getItem('sbu-chat-history');
    expect(sessionChatHistory).toEqual(JSON.stringify([]));
  });

  test('Should return object with two fields', () => {
    sessionStorage.clear();
    saveMessage({ message: 'message' });
    saveMessage({ message: 'message' });
    const sessionChatHistory = sessionStorage.getItem('sbu-chat-history');
    expect(sessionChatHistory).toEqual(JSON.stringify([{ message: 'message' }]));
  });
});

describe('sendMessage function', () => {
  const settingAPI = {
    userID: 'userID',
    clientData: 'clientData,',
  };

  test('Should call functions ', () => {
    const addMessage = jest.fn();
    const fetchResponse = jest.fn();
    sendMessageHandler(settingAPI, addMessage, fetchResponse)('customValue');
    expect(addMessage).toBeCalled();
    expect(fetchResponse).toBeCalled();
  });

  test('Should return undefined with void value and not call fns', () => {
    const addMessage = jest.fn();
    const fetchResponse = jest.fn();
    expect(sendMessageHandler(settingAPI, addMessage, fetchResponse)('   ')).toBeUndefined();
    expect(addMessage).not.toBeCalled();
    expect(fetchResponse).not.toBeCalled();
  });

  test('Should set default keyAPI without keyApi attr', () => {
    const addMessage = jest.fn();
    const fetchResponse = jest.fn();
    sendMessageHandler(settingAPI, addMessage, fetchResponse)('customValue');
    expect(addMessage).toBeCalled();
    expect(fetchResponse).toBeCalled();
  });
});

describe('onWindowResizeHelper function', () => {
  let currentWidth;
  let windowCurrentWidth;
  let setCurrentWidth;
  let setCurrentHeight;
  let changeCurrentSize;
  let setEnabled;

  beforeEach(() => {
    setCurrentWidth = jest.fn();
    setCurrentHeight = jest.fn();
    changeCurrentSize = jest.fn();
    setEnabled = jest.fn();
  });

  afterEach(() => jest.clearAllMocks());

  test('should return a function', () => {
    expect(
      onWindowResizeHelper(
        currentWidth,
        windowCurrentWidth,
        setCurrentWidth,
        setCurrentHeight,
        changeCurrentSize,
        setEnabled,
      ),
    ).toBeInstanceOf(Function);
  });

  test('Should not call functions when currentWidth < windowCurrentWidth', () => {
    currentWidth = 500;
    windowCurrentWidth = 600;
    onWindowResizeHelper(
      currentWidth,
      windowCurrentWidth,
      setCurrentWidth,
      setCurrentHeight,
      changeCurrentSize,
      setEnabled,
    )();
    expect(setCurrentWidth).not.toBeCalled();
    expect(setCurrentHeight).not.toBeCalled();
    expect(changeCurrentSize).not.toBeCalled();
    expect(setEnabled).not.toBeCalled();
  });

  test('Should call functions when currentWidth > windowCurrentWidth', () => {
    currentWidth = 700;
    windowCurrentWidth = 600;
    onWindowResizeHelper(
      currentWidth,
      windowCurrentWidth,
      setCurrentWidth,
      setCurrentHeight,
      changeCurrentSize,
      setEnabled,
    )();
    expect(setCurrentWidth).toBeCalled();
    expect(setCurrentHeight).toBeCalled();
    expect(changeCurrentSize).toBeCalled();
    expect(setEnabled).toBeCalled();
  });

  test('Should call functions when windowCurrentWidth > 1800', () => {
    currentWidth = 2000;
    windowCurrentWidth = 1900;
    onWindowResizeHelper(
      currentWidth,
      windowCurrentWidth,
      setCurrentWidth,
      setCurrentHeight,
      changeCurrentSize,
      setEnabled,
    )();
    expect(setCurrentWidth).toBeCalled();
    expect(setCurrentHeight).toBeCalled();
    expect(changeCurrentSize).toBeCalled();
    expect(setEnabled).toBeCalled();
  });
});
