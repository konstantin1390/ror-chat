import React, { useCallback } from 'react';
import toggleFullScreen from './toggleFullScreen';

const Image = ({ src, toggleFullScreenHandler }) => {
  const setFullScreenHandler = useCallback(toggleFullScreen(toggleFullScreenHandler, src));

  return (
    <>
      <img onClick={setFullScreenHandler} src={src} alt="ResponseBotImage" />
    </>
  );
};

export default Image;
