import { images } from "../../Constants";
import "./ReusableHeader.scss";

import React from "react";

function ReusableHeader({ pageTitle }) {
  return (
    <div className="home-div">
      <div className="home-button">
        <a href="/" className="home-logo">
          <img src={images.logo} className="about-logo" alt="busteki-logo" />
        </a>
        <div className="home-link-container">
          <a href="/" className="home">
            back Home
          </a>
        </div>
      </div>

      {/* <div className="about-page-title-div">
        <h1 className="about-page-subtitle">{pageTitle}</h1>
      </div> */}
    </div>
  );
}

export default ReusableHeader;
