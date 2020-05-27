import React from 'react';
import { ChatContext } from '../../../../Chat';
import BotMessageIconWrapper from './StyledBotMessageIcon';
import { avatarImg } from '../../../../../constants';
import './BotMessageIcon.less';

export const BotMessageIcon = ({ messageIconUrlBot, messageIconBackgroundBot }) => {
  return (
    <BotMessageIconWrapper
      className="sbu-bot-message__icon"
      messageIconBackgroundBot={messageIconBackgroundBot}
      data-message-icon-background-bot={messageIconBackgroundBot}
    >
      <img src={messageIconUrlBot || avatarImg} alt="BotMessageIcon" />
    </BotMessageIconWrapper>
  );
};

export default props => (
  <ChatContext.Consumer>
    {context => <BotMessageIcon {...props} {...context} />}
  </ChatContext.Consumer>
);
