import React from 'react';

const Thumbnail = ({ image, currentIndex, index }) => {
  return (
    <div className="column" style={{ width: '100%' }} >
      <img
        className={`demo ${currentIndex === index ? 'active' : ''}`}
        src={image}
        alt={`Thumbnail ${index + 1}`}
      />
    </div>
  );
};

export default Thumbnail;