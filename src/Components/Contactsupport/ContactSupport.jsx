import React from "react";
import "./ContactSupport.scss";
import ContactUs from "../../Container/Contactus/ContactUs";
import Title from "../Title/Title";
import SinglepagePath  from "../Singlepage/SinglepagePath";

function ContactSupport() {
  return (
    <div className="container">
      <SinglepagePath />
      <Title title={"Busteki/Contact support"} />
      <ContactUs />
    </div>
  );
}

export default ContactSupport;
