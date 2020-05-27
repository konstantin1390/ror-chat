import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar/Avatar';
import Message from './Message/Message';
import './Icon.less';

const ChatIcon = ({ toggleEnabled }) => (
  <div className="Chat-icon">
    <Message className="Chat-icon__message" />
    <Avatar className="Chat-icon__avatar" toggleEnabled={toggleEnabled} />
  </div>
);

ChatIcon.propTypes = {
  toggleEnabled: PropTypes.func,
};

export default ChatIcon;
