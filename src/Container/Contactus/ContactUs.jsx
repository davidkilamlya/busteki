import React from "react";
import Title from "../../Components/Title/Title";
import "./ContactUs.scss";
import { images } from "../../Constants";

function ContactUs() {
  return (
    <div className="contactUs" id={`Contact us`}>
      <div className="contactus-form-title">
        <div className="contact-image-description">
          <div className="contact-image">
            <img src={images.contactus} alt="contactus" className="svg-image" />
          </div>
          <div className="contact-description">
            <p className="pContact-description">
              Get touch with us if you want to work with us or sponsoring this
              project.
            </p>
          </div>
        </div>
        <div className="contact-form-title">
          <div className="contact-title">
            <Title title={"contact us"} visible/>
          </div>
          <div className="contact-form">
            <input
              type="text"
              name="userName"
              id="userName"
              className="userName input"
              placeholder="your name/company name"
            />
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              className="userEmail input"
              placeholder="company email/Your Email"
            />

            <textarea
              name="message"
              id="message"
              className="message input"
              placeholder="message"
            ></textarea>
          </div>
          <div className="contact-btn">
            <button className="contact-submit">submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
