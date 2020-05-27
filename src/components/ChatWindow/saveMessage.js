export default message => {
  let history = sessionStorage.getItem('chat-history');
  history = history && JSON.parse(history);
  if (history)
    sessionStorage.setItem('chat-history', history && JSON.stringify([...history, message]));
  else sessionStorage.setItem('chat-history', JSON.stringify([]));
};
