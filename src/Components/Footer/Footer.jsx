import React from "react";
import "./Footer.scss"; // Import the external SCSS file
import { images } from "../../Constants";
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={images.logo} alt="Busteki Logo" />
          <h2>Busteki</h2>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/#packages">Packages</a>
            </li>
            <li>
              <a href="/#about us">About Us</a>
            </li>
            <li>
              <a href="/#Contact us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#_" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#_" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#_" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#_" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Busteki. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
