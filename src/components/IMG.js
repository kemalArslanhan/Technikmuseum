import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const IMG = ({ imageData, alt }) => {
  const image = getImage(imageData);
  
  return <GatsbyImage image={image} alt={alt} />;
};

export default IMG;