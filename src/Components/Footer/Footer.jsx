import React from "react";
import "./Footer.scss";
import LinkList from "../Links-list/LinkList";
import { images } from "../../Constants";
function Footer() {
  const linkName = [
    {
      name: "About BusTeki",
      href: "./aboutus",
    },
    {
      name: "Contact support",
      href: "./contactSupport",
    },
    {
      name: "Be our sponsor",
      href: "./sponsor",
    },
    {
      name: "Our services",
      href: "./services",
    },
  ];

  return (
    <div className="footer">
      <div className="footer-links">
        
            <img src={images.logo} alt="" className="logofooter" />
      
        <LinkList headTitle={"visit"} linkName={linkName} />
        <div className="terms">
            <LinkList linkName={[{name:"Terms&agreement"}]}/>
        </div>
      </div>
      <div className="footer-patners"></div>

      <div className="social-media"></div>
    </div>
  );
}

export default Footer;
