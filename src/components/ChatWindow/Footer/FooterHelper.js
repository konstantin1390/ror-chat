export const cutValue = value => value.slice(0, value.length - 1);

export const changeHeight = (setInputHeight, inputValue, setInputValue) => {
  return e => {
    setInputHeight(e);
    inputValue.trim() === '' && setInputValue('');
  };
};
