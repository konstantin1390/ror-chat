import React from 'react';
import { arrowDown } from '../../../../constants';
import './FastForwardButton.less';

export default ({ fastForwardHandler }) => (
  <div className="sbu-fast-forward__icon" onClick={fastForwardHandler}>
    <img src={arrowDown} alt="arrowDownIcon" />
  </div>
);
