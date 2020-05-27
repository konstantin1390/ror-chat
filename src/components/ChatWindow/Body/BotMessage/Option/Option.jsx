import React, { useCallback } from 'react';
import OptionWrapper from './StyledOption';
import './Option.less';

export const Option = props => {
  const {
    answer,
    fieldColor,
    fieldBackground,
    fieldBorderColor,
    hasIcon,
    sendMessage,
    setIsClickedOption,
  } = props;

  const sendOptionHandler = useCallback(() => {
    sendMessage(answer);
    setIsClickedOption(true);
  });
  return (
    <OptionWrapper
      onClick={sendOptionHandler}
      className="sbu-options__option"
      fieldColor={fieldColor}
      hasIcon={hasIcon}
      fieldBackground={fieldBackground}
      fieldBorderColor={fieldBorderColor}
      data-field-color={fieldColor}
      data-field-background={fieldBackground}
      data-field-border-color={fieldBorderColor}
    >
      <span>{answer}</span>
    </OptionWrapper>
  );
};

export default Option;
