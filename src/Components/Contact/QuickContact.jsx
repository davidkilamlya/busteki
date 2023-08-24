import React, { useState } from "react";
import Contact from "./Contact";
import "./QuickContact.scss";
import ContactUs from "../../Container/Contactus/ContactUs";
function QuickContact() {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="contact-us">
      <Contact />
      <button className="contact-us-btn" onClick={() => !showContact? setShowContact(true):setShowContact(false)}>
        Contact Us
      </button>
      <div className="show-contact">{showContact && <ContactUs />}</div>
    </div>
  );
}

export default QuickContact;
