import React from 'react';
import { Sidebar, Search } from './styledSidebar';
//import img from '../../../../public/images/search-icon.svg';

const SidebarModule = () => {
  return (
    <Sidebar>
      <Sidebar.header>
        <Search>
          <img src="public/images/search-icon.svg" alt="search-icon" />
          <Search.input></Search.input>
        </Search>
      </Sidebar.header>
    </Sidebar>
  );
};

export default SidebarModule;
