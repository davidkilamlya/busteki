import React, { useEffect, useState } from "react";
import "./ExtSlider.scss";
import webdev from "../../Assets/appdevelopment.jpg";
import webdev2 from "../../Assets/webdevelopment1.jpg";

let sliderNum = ["slider 1", "slider 2", "slider 3"];

function ExtSlider() {
  const [counterNumber, setCounterNumber] = useState(0);
  const [counterHolder, setCounterHolder] = useState(0);

  const counter = () => {
    if (counterNumber < sliderNum.length - 1) {
      setCounterNumber(counterNumber + 1);
      const firstSlider = sliderNum[counterNumber];
      sliderNum.push(firstSlider);
    } else {
      setCounterNumber(0);
      const firstSlider = sliderNum[0];
      sliderNum.push(firstSlider);
    }
    setCounterHolder(counterHolder + 1);
  };
  
  console.log(sliderNum, " counter holder ", counterHolder);
  useEffect(() => {
    const interval = setInterval(() => counter(), 4000);

    return () => clearInterval(interval);
  });
  console.log(counterNumber);
  return (
    <div
      className="extslider-container"
      style={{
        transform: `translateX(-${counterHolder * 100}%)`,
      }}
    >
      {sliderNum.map((item, index) => {
        return (
          <div className="slider-div" key={index}>
            {/* <img className="slider-image" src={webdev2} alt={item} /> */}
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default ExtSlider;
