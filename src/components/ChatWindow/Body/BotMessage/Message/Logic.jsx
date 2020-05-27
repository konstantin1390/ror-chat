import React from 'react';
import Image from './Image/Image';
import Video from './Video/Video';

export const printMessage = (data, isFullScreen, toggleFullScreenHandler) => {
  switch (data.type) {
    case 'text':
      return <span dangerouslySetInnerHTML={{ __html: data.responseText }} />;
    case 'image':
      return (
        <Image
          src={data.responseImageURL}
          alt="ResponseBotImage"
          toggleFullScreenHandler={toggleFullScreenHandler}
        />
      );
    case 'video':
      return <Video src={data.responseVideoURL} isFullScreen={isFullScreen} />;
    default:
      return <span>Ooops something went wrong</span>;
  }
};
