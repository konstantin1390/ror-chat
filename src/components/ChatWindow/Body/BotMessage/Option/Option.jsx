import React, { useCallback } from 'react';
import OptionWrapper from './StyledOption';
import PropTypes from 'prop-types';
import './Option.less';

export const Option = props => {
  const sendOptionHandler = useCallback(() => {
    sendMessage(answer);
    setIsClickedOption(true);
  });

  const {
    answer,
    fieldColor,
    fieldBackground,
    fieldBorderColor,
    hasIcon,
    sendMessage,
    setIsClickedOption,
  } = props;
  return (
    <OptionWrapper
      onClick={sendOptionHandler}
      className="options__option"
      fieldColor={fieldColor}
      hasIcon={hasIcon}
      fieldBackground={fieldBackground}
      fieldBorderColor={fieldBorderColor}
    >
      <span>{answer}</span>
    </OptionWrapper>
  );
};

Option.propTypes = {
  answer: PropTypes.string,
  fieldColor: PropTypes.string,
  sendMessage: PropTypes.func,
  setIsClicked: PropTypes.func,
  hasIcon: PropTypes.bool.isRequired,
  fieldBackground: PropTypes.string,
  fieldBorderColor: PropTypes.string,
  setIsClickedOption: PropTypes.func,
};

export default Option;
