import "./Contact.scss";

import { MdEmail } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
function Contact({ IconColor, socialVisible }) {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-phone-email contact-social">
          <a href="tel:255747269016" className="call">
            <AiTwotonePhone className="icon" style={{ color: IconColor }} />
            <span className="contact-details">+255 747 269016</span>
          </a>
          <a href="mail:help@busteki.co.tz" className="email">
            <MdEmail className="icon" style={{ color: IconColor }} />
            <span className="contact-details">help@busteki.co.tz</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
