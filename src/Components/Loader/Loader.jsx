import "./Loader.scss";
import React from "react";
import { images } from "../../Constants";

function Loader() {
  return (
    <div className="loader-component">
      <div className="loader-logo-text-div">
        <div className="top-line"></div>
        
          <img src={images.logo} className="loader-logo" alt="busteki-loading" />
        
        <div className="bottom-line"></div>
        <div className="message">
          <span className="message-text">please wait ...</span>
          <span>we are almost there</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
