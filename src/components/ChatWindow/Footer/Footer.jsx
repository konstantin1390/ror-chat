import React, { useCallback } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { ChatContext } from '../../Chat';
import InputWrapper from './StyledInputWrapper';
import FooterWrapper from './StyledFooter';
import { sendImg } from '../../../constants';
import localization from '../../../localization';
import { cutValue, changeHeight } from './FooterHelper';
import './Footer.less';

export const Footer = props => {
  const {
    setInputHeight,
    inputColor,
    inputPlaceholder,
    footerBackground,
    footerBorderColor,
    sendMessage,
    inputValue,
    setInputValue,
    scrollElement,
    windowCurrentHeight,
    windowCurrentWidth,
    lang,
    setIsClickedOption,
    currentWidth,
    isRightResize,
    isFullScreen,
  } = props;

  const setInputHandler = useCallback(e => {
    scrollElement ? (scrollElement.current.scrollTop = scrollElement.current.scrollHeight) : null;
    setInputValue(e.target.value);
  });

  const keyPressHandler = useCallback(e => {
    if (e.keyCode === 13 && windowCurrentHeight < windowCurrentWidth && windowCurrentWidth > 1024) {
      const inputLastChar = inputValue[inputValue.length - 1];
      const inputFirstChar = inputValue[0];
      if (!e.shiftKey) {
        setIsClickedOption(true);
        sendMessage(inputValue);
        setInputValue('');
      } else if (
        (e.shiftKey && inputLastChar === '\n') ||
        (e.shiftKey && inputFirstChar === '\n')
      ) {
        setInputValue(cutValue(inputValue));
      }
    }
  });

  const changeHeightHandler = useCallback(changeHeight(setInputHeight, inputValue, setInputValue));

  const buttonClickHandler = useCallback(e => {
    e.preventDefault();
    inputValue.trim() !== '' && setIsClickedOption(true);
    sendMessage(inputValue);
    setInputValue('');
  });

  return (
    <FooterWrapper
      id="footer-wrapper"
      isFullScreen={isFullScreen}
      className="sbu-Сhat-window___footer sbu-footer"
      currentWidth={currentWidth}
      isRightResize={isRightResize}
      footerBackground={footerBackground}
      footerBorderColor={footerBorderColor}
      data-footer-background={footerBackground}
      data-footer-border-color={footerBorderColor}
    >
      <InputWrapper
        id="footer-input"
        className="sbu-footer__input-wrapper sbu-input-wrapper"
        footerBackground={footerBackground}
        data-footer-background={footerBackground}
      >
        <TextareaAutosize
          id="input-field"
          className="sbu-input-wrapper__input"
          wrap={self}
          maxRows={10}
          name="input"
          value={inputValue}
          onChange={setInputHandler}
          style={{ color: inputColor || 'black' }}
          placeholder={inputPlaceholder || localization[lang]['input.placeholder']}
          onKeyDown={keyPressHandler}
          onHeightChange={changeHeightHandler}
        />
        <button id="send-button" className="sbu-input-wrapper__button" onClick={buttonClickHandler}>
          <img src={sendImg} alt="send" />
        </button>
      </InputWrapper>
    </FooterWrapper>
  );
};

export default props => (
  <ChatContext.Consumer>{context => <Footer {...props} {...context} />}</ChatContext.Consumer>
);
