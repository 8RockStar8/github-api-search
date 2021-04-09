import React from 'react';
import PropTypes from 'prop-types';

import './image.css';

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
