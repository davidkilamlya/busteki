// import contacts from "../../util/contacts";
import "./SideContacts.scss";
import { FaPhone, FaWhatsapp, FaMailBulk } from "react-icons/fa";
import { AiFillMail, AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai";

function SideContacts() {
  return (
    <div className="side-contacts-container">
      <div className="side-contacts-div">
        <div className="contact-icon-div" title="call us">
          <a href={`tel:0756592179`} className="contact-icon-link">
            <FaPhone className="icon" />
          </a>
        </div>
        <div className="contact-icon-div" title="mail us">
          <a href={`mail:busteki@gmail.com`} className="contact-icon-link">
            <AiFillMail className="icon" />
          </a>
        </div>
        <div className="contact-icon-div" title="Whatsapp">
          <a href={`https://wa.me?+255756592179`} className="contact-icon-link">
            <AiOutlineWhatsApp className="icon" />
          </a>
        </div>
        <div className="contact-icon-div" title="instagram">
          <a href={`bustekitz`} className="contact-icon-link">
            <AiFillInstagram className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideContacts;
