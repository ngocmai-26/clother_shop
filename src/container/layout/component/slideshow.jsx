import React, { useState } from "react";
import Slide from "./slide";
import Thumbnail from "./thumbnail";

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-5 overflow-hidden ">
        <div className="mySlides">
          <a className="prev" onClick={prevSlide}>
          &#8743;
          </a>
          <div className="flex flex-col ">
            {images.map((image, index) => (
              <Thumbnail
                key={index}
                image={image}
                index={index}
                currentIndex={currentImageIndex}
              />
            ))}
          </div>

          <a className="next" onClick={nextSlide}>
          &#8744;
          </a>
        </div>
        <div className="col-span-3">
          {images.map((image, index) => (
            <Slide
              key={index}
              image={image}
              currentIndex={currentImageIndex}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* <div className="row">
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            image={image}
            index={index}
            currentIndex={currentImageIndex}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Slideshow;
