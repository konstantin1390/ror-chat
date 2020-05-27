import { saveMessage, getTime } from './ChatWindowHelper';

const requestOptions = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export default (value, addMessage, settingsAPI) =>
  fetch(`${settingsAPI.urlRequest}?key=${settingsAPI.key}`, {
    ...requestOptions,
    body: JSON.stringify(value),
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      addMessage({
        type: 'botMessage',
        data: {
          type: 'typing',
        },
      });
      getResponse(JSON.parse(data.d).response, settingsAPI, addMessage);
    });

export const getResponse = (token, settingsAPI, addMessage) =>
  fetch(`${settingsAPI.urlResponse}?key=${settingsAPI.key}`, {
    ...requestOptions,
    body: JSON.stringify({
      responseID: token,
    }),
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      const response = JSON.parse(data.d);

      response.responseActions =
        response.type === 'text' &&
        new RegExp(/suggest/).test(response.responseActions) &&
        suggestParse(response.responseActions);
      const message = {
        type: 'botMessage',
        data: {
          type: response.type,
          responseText: response.responseText,
          responseActions: response.responseActions,
          responseImageURL: response.responseImageURL || '',
          responseID: Math.random().toString(),
          nextResponse: response.nextResponse,
          time: getTime(),
        },
      };
      if (message.data.type !== 'typing') saveMessage(message);

      addMessage(message);
      token = response.nextResponse;
      token && getResponse(token, settingsAPI, addMessage);
    });

export const suggestParse = responseActions => {
  const domParser = new DOMParser();
  return domParser
    .parseFromString(responseActions, 'text/xml')
    .querySelector('suggest')
    .textContent.split(',');
};
