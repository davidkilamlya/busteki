import React, { useState } from "react";
import "./NavBar.scss";
import { images } from "../../Constants";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "../Contact/Contact";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const navList = ["Home", "about us", "services", "packages", "Contact us"];
  const [toggle, setToggle] = useState(false);

  const handleServiceNavigate = () => {
    navigate("/request");
  };
  return (
    <div className="nav-bar-contact">
      <Contact />
      <nav className="NavBar" id="home">
        <div className="navbar_logo">
          <img className="logo" src={images.logo} alt="busteki_logo" />
        </div>
        <ul className="navbar_list">
          {navList.map((item) => (
            <li className="navbar_list_item" key={`link-${item}`}>
              <div />
              <a href={`/#${item}`}> {item}</a>
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt3 onClick={() => setToggle(true)} />
          <AnimatePresence>
            {toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: [0, 100, 0, 100, 0] }}
                transition={{ duration: 0.85, ease: "backInOut" }}
                exit={{ opacity: 0 }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {navList.map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="nav-service-button">
          <button className="service-button" onClick={handleServiceNavigate}>
            Request service
          </button>
        </div>
      </nav>
    </div>
  );
};
