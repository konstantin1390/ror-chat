import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import exitImage from '../../../../../../../public/images/close.svg';
import './Image.less';

const Image = ({ src }) => {
  const [isFullScreenImage, setFullScreenImage] = useState(false);

  const toggleFullScreenHandler = useCallback(() =>
    setFullScreenImage(isFullScreenImage => !isFullScreenImage),
  );

  return (
    <>
      <img onClick={toggleFullScreenHandler} src={src} alt="ResponseBotImage" />
      {isFullScreenImage && (
        <div className="message__image image">
          <img
            onClick={toggleFullScreenHandler}
            className="image__exit"
            src={exitImage}
            alt="exit"
          />
          <div onClick={toggleFullScreenHandler} className="image__background" />
          <img src={src} alt="ResponseBotImage" />
        </div>
      )}
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
