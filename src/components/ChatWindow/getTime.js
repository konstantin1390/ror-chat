export default () => {
  const date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  if (hour < 10) hour = '0' + hour;
  if (minutes < 10) minutes = '0' + minutes;
  return `${hour}:${minutes}`;
};
