export const getIconStatus = (message, previousMessage) => {
  if (previousMessage)
    if (previousMessage && message.data.type && previousMessage.type === message.type) return false;
    else return previousMessage.type !== message.type;
  else return true;
};

export const getLastSugID = messagesHistory => {
  let lastSugID = null;
  if (messagesHistory.find(message => message.type === 'botMessage')) {
    const lastMessageWithActions = messagesHistory
      .filter(message => message.type === 'botMessage')
      .reverse();
    lastSugID =
      lastMessageWithActions.find(message => message.data.responseActions) &&
      lastMessageWithActions.find(message => message.data.responseActions).data.responseID;
  }
  return lastSugID;
};
