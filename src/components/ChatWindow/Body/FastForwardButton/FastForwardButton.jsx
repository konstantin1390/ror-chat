import React from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from './../../../Chat';
import arrowDown from './../../../../../public/images/Arrow-down.svg';

import './FastForwardButton.less';

export const FastForwardButton = props => {
  const { scrollElement } = props;

  return (
    <div className="fast-forward__icon">
      <img
        src={arrowDown}
        alt="arrowDownIcon"
        onClick={() => {
          setTimeout(() => {
            scrollElement
              ? (scrollElement.current.scrollTop = scrollElement.current.scrollHeight)
              : null;
          }, 100);
        }}
      />
    </div>
  );
};

FastForwardButton.proptypes = {};

export default props => (
  <ChatContext.Consumer>
    {context => <FastForwardButton {...props} {...context} />}
  </ChatContext.Consumer>
);
