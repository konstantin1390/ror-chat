import React from 'react';
import { Body } from './styledBody';
import SidebarModule from '../sidebarModule/Sidebar';
import ContentModule from '../contentModule/Content';

const BodyModule = () => {
  return (
    <Body>
      <SidebarModule />
      <ContentModule />
    </Body>
  );
};

export default BodyModule;
