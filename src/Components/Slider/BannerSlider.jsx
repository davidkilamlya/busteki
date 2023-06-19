 import React, { useState, useEffect } from "react";
import "./BannerSlider.scss";

const BannerSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-slider">
      <div
        className="banner-slider-wrapper"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="banner-slider-slide"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      <div className="banner-slider-controls">
        <button className="prev-slide" onClick={handlePrevSlide}>
          Prev
        </button>
        <button className="next-slide" onClick={handleNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BannerSlider;