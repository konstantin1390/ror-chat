import React from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../../Chat';
import MessageWrapper from './StyledMessage';
import './Message.less';

export const Message = ({ iconMessageText, iconMessageColor, iconMessageBackground }) => (
  <MessageWrapper
    className="Chat-icon__message message"
    iconMessageColor={iconMessageColor}
    iconMessageBackground={iconMessageBackground}
  >
    <span className="message__text">{iconMessageText || 'Help with deposit?'}</span>
  </MessageWrapper>
);

Message.propTypes = {
  iconMessageText: PropTypes.string,
  iconMessageColor: PropTypes.string,
  iconMessageBackground: PropTypes.string,
};

export default props => (
  <ChatContext.Consumer>{context => <Message {...props} {...context} />}</ChatContext.Consumer>
);
