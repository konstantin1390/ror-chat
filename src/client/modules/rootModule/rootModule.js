import React, { useState } from 'react';
import ResizableModule from '../resizibleModule/ResizableModule';
import MainModule from '../mainModule/MainModule';

const RootModule = () => {
  const [isFullScreen, setFullScreen] = useState(false);
  const toggleMode = () => {
    setFullScreen(!isFullScreen);
  };

  return (
    <>
      {isFullScreen ? (
        <MainModule isFullScreen={isFullScreen} toggleMode={toggleMode} />
      ) : (
        <ResizableModule toggleMode={toggleMode} />
      )}
    </>
  );
};

export default RootModule;
