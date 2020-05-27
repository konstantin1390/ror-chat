import { getIconStatus, getLastSugID } from '../logic';

describe('getIconStatus function', () => {
  test('Should return true when previousMessage is falsy', () => {
    const message = {};
    const previousMessage = false;
    expect(getIconStatus(message, previousMessage)).toBe(true);
  });

  test('Should return false when message type === previousMessage type', () => {
    const message = {
      type: 'botMessage',
      data: {
        type: 'text',
      },
    };
    const previousMessage = {
      type: 'botMessage',
    };
    expect(getIconStatus(message, previousMessage)).toBe(false);
  });

  test('Should return true when message type !== previousMessage type', () => {
    const message = {
      type: 'botMessage',
      data: {
        type: 'text',
      },
    };
    const previousMessage = {
      type: 'userMessage',
    };
    expect(getIconStatus(message, previousMessage)).toBe(true);
  });
});

describe('getLastSugID function', () => {
  test('Should return last id in message history witch contains suggests', () => {
    const messagesHistory = [
      {
        type: 'botMessage',
        data: {
          responseActions: null,
          responseID: '1',
        },
      },
      {
        type: 'botMessage',
        data: {
          responseActions: 'response.responseActions',
          responseID: '2',
        },
      },
      {
        type: 'botMessage',
        data: {
          responseActions: null,
          responseID: '3',
        },
      },
    ];
    expect(getLastSugID(messagesHistory)).toBe('2');
  });

  test('Should don`t return null without botMessage type of message', () => {
    const messagesHistory = [
      { type: 'userMessage' },
      { type: 'userMessage' },
      { type: 'userMessage' },
    ];
    expect(getLastSugID(messagesHistory)).toBeNull();
  });
});
