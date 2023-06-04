import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ImageSlider.scss"
import {images} from "../../Constants"

const spanStyle = {
  padding: "80px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: images.banner1,
    caption: "Slide 1",
  },
  {
    url: images.banner2,
    caption: "Slide 2",
  },
  {
    url: images.banner1,
    caption: "Slide 3",
  },
];

function Slider() {
  return (
    <div className="slide-container" >
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slider;
