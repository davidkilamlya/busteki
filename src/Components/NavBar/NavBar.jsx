import React, { useState } from "react";
import "./NavBar.scss";
import { images } from "../../Constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { Link,NavLink } from "react-router-dom";

export const NavBar = () => {
  const navList = [
    "Home",
    "about us",
    "services",
    "Work",
    "update",
    "Testimonial",
    "team",
    "Contact us",
  ];
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="NavBar">
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
        <HiMenuAlt4 onClick={() => setToggle(true)} />
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
    </nav>
  );
};
