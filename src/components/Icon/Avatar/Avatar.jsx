import React from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../../Chat';
import AvatarWrapper from './StyledAvatar';
import avatarImg from '../../../../public/images/avatar.svg';

import './Avatar.less';

export const Avatar = ({ toggleEnabled, iconUrl, iconBackground }) => (
  <AvatarWrapper
    onClick={toggleEnabled}
    className="Chat-icon__avatar"
    iconBackground={iconBackground}
  >
    <img src={iconUrl || avatarImg} alt="iconAvatar" />
  </AvatarWrapper>
);

Avatar.propTypes = {
  iconUrl: PropTypes.string,
  toggleEnabled: PropTypes.func,
  iconBackground: PropTypes.string,
};

export default props => (
  <ChatContext.Consumer>{context => <Avatar {...props} {...context} />}</ChatContext.Consumer>
);
