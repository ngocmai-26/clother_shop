import React from 'react';

const Slide = ({ image, currentIndex, index }) => {
  return (
    <div className={currentIndex === index ? 'mySlides' : 'mySlides hidden'}>
      <div className="numbertext">{index + 1} / {currentIndex + 1}</div>
      <img src={image} style={{ width: '100%' }} alt={`Image ${index + 1}`} />
    </div>
  );
};

export default Slide;