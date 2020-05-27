import React from 'react';
import StyledVideo from './StyledVideo';

const Video = ({ src, isFullScreen }) => {
  return (
    <StyledVideo
      isFullScreen={isFullScreen}
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default Video;
