import React from 'react';
import { Main } from './styledMain';
import HeaderModule from '../headerModule/Header';
import BodyModule from '../bodyModule/Body';

const MainModule = ({ isFullScreen, toggleMode }) => {
  return (
    <Main>
      <HeaderModule isFullScreen={isFullScreen} toggleFullScreen={toggleMode} />
      <BodyModule />
    </Main>
  );
};

export default MainModule;
