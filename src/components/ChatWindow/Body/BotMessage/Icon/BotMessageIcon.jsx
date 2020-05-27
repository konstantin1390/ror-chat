import React from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../../../../Chat';
import BotMessageIconWrapper from './StyledBotMessageIcon';
import avatarImg from '../../../../../../public/images/avatar.svg';
import './BotMessageIcon.less';

export const BotMessageIcon = ({ messageIconUrlBot, messageIconBackgroundBot }) => {
  return (
    <BotMessageIconWrapper
      className="bot-message__icon"
      messageIconBackgroundBot={messageIconBackgroundBot}
    >
      <img src={messageIconUrlBot || avatarImg} alt="BotMessageIcon" />
    </BotMessageIconWrapper>
  );
};

BotMessageIcon.propTypes = {
  messageIconUrlBot: PropTypes.string,
  messageIconBackgroundBot: PropTypes.string,
};

export default props => (
  <ChatContext.Consumer>
    {context => <BotMessageIcon {...props} {...context} />}
  </ChatContext.Consumer>
);
