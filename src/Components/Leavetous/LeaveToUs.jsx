import { useEffect, useState } from "react";

import "./LeaveToUs.scss";

function LeaveToUs({ image, focusTitle, titleDescription, url, urlTitle }) {
  const [text, setText] = useState("");
  // const messages = [focusTitle];

  useEffect(() => {
    
    const message = focusTitle; 
    let currentText = "";
    let typingSpeed = 300; 
     

    const type = () => {
     if (currentText.length < message.length) {
       currentText += message.charAt(currentText.length);
       setText(currentText);
       setTimeout(type, typingSpeed);
     }
     
    };

    type();
  }, []);

  return (
    <di className="leave-to-us-container">
      <div className="leave-to-us-container-div">
        <div className="leave-to-us-image-container">
          <img src={image} alt="cloud" className="leave-img" />
        </div>
        <div className="leave-to-us-description-div">
          <h1 className="leave-to-us-description">{text}</h1>
          <div className="description-paragraph">
            <p className="leave-to-us-paragraph">{titleDescription}</p>
          </div>
          <div className="leave-button-div">
            <a href="#Contact us" className="contact-link">
              Contact us
            </a>
            <a href={url} className="request-link">
              {urlTitle}
            </a>
            
          </div>
        </div>
      </div>
    </di>
  );
}

export default LeaveToUs;
