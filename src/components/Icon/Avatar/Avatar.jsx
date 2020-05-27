import React from 'react';
import { ChatContext } from '../../Chat';
import AvatarWrapper from './StyledAvatar';
import { avatarImg } from '../../../constants';

import './Avatar.less';

export const Avatar = ({ toggleEnabled, iconUrl, iconBackground }) => (
  <AvatarWrapper
    onClick={toggleEnabled}
    className="sbu-Chat-icon__avatar"
    iconBackground={iconBackground}
    data-icon-background={iconBackground}
  >
    <img src={iconUrl || avatarImg} alt="iconAvatar" />
  </AvatarWrapper>
);

export default props => (
  <ChatContext.Consumer>{context => <Avatar {...props} {...context} />}</ChatContext.Consumer>
);
