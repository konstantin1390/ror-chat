export default body => {
  const activeElement = document.activeElement.tagName;
  if (activeElement === 'TEXTAREA' || activeElement === 'INPUT') {
    document.activeElement.blur();
  } else body.focus();
  body.style.width = window.innerWidth;
  body.style.height = window.innerHeight;
};

export const setScrollStatus = status => {
  const body = document.getElementsByTagName('body')[0];
  body.style.overflow = status;
};
