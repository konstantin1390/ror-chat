export const changeVisibilityHandler = (scrollElement, setFastForwardButtonVisibility) => () => {
  if (scrollElement.current) {
    setFastForwardButtonVisibility(
      scrollElement.current.scrollTop < scrollElement.current.scrollHeight - 1000,
    );
  }
};

export const scrollDown = scrollElement => () => {
  scrollElement && (scrollElement.current.scrollTop = scrollElement.current.scrollHeight);
};

export const checkScroll = (scrollElement, scrollDown) => {
  scrollElement.current.scrollHeight - scrollElement.current.scrollTop < 1024 &&
    setTimeout(scrollDown(scrollElement), 100);
};
