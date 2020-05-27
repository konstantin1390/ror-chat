import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import { ChatContext } from '../../Chat';
import InputWrapper from './StyledInputWrapper';
import FooterWrapper from './StyledFooter';
import sendImg from '../../../../public/images/send.svg';
import localization from '../../../localization';
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
        setInputValue(value => value.slice(0, value.length - 1));
      }
    }
  });

  const changeHeightHandler = useCallback(e => {
    setInputHeight(e);
    inputValue.trim() === '' && setInputValue('');
  });

  const buttonClickHandler = useCallback(e => {
    e.preventDefault();
    inputValue.trim() !== '' && setIsClickedOption(true);
    sendMessage(inputValue);
    setInputValue('');
  });

  return (
    <FooterWrapper
      className="Сhat-window___footer footer"
      footerBackground={footerBackground}
      footerBorderColor={footerBorderColor}
    >
      <InputWrapper
        className="footer__input-wrapper input-wrapper"
        footerBackground={footerBackground}
      >
        <TextareaAutosize
          className="input-wrapper__input"
          wrap={self}
          maxRows={10}
          value={inputValue}
          onChange={setInputHandler}
          style={{ color: inputColor || 'black' }}
          placeholder={inputPlaceholder || localization[lang]['input.placeholder']}
          onKeyDown={keyPressHandler}
          onHeightChange={changeHeightHandler}
        />
        <button className="input-wrapper__button" onClick={buttonClickHandler}>
          <img src={sendImg} alt="send" />
        </button>
      </InputWrapper>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  sendMessage: PropTypes.func,
  inputColor: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  footerBackground: PropTypes.string,
  footerBorderColor: PropTypes.string,
};

export default props => (
  <ChatContext.Consumer>{context => <Footer {...props} {...context} />}</ChatContext.Consumer>
);
