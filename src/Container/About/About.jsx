import React from "react";
import "./About.scss";
import { images } from "../../Constants";
import { LazyMotion, domAnimation, motion } from "framer-motion";

import Title from "../../Components/Title/Title";

export default function About() {
  return (
    <div className="About" id="about us">
      <Title title={"About Us"} visible />

      <div className="about-description">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="about-description-details">
                <h2 className="about-tittle">Who we are</h2>
                <div className="about-details">
                  <p>
                    Busteki is a visionary technology startup founded by a team
                    of passionate individuals with a shared goal: to democratize
                    access to technology. We believe that everyone should have
                    the opportunity to harness the power of digital innovation,
                    regardless of their resources or technical expertise. The
                    project aims to empower institutions and budding
                    entrepreneurs who face financial barriers to owning
                    essential ICT systems such as websites and applications.
                  </p>
                  <img src={images.handArrow} alt="" className="hand-arrow" />
                  <p>
                    At BUSTEKI, we understand the significance of ICT for every
                    individual and its potential to drive growth and innovation
                    in businesses. Our project is dedicated to leveling the
                    playing field by offering accessible and cost-effective
                    solutions that simplify the process of developing and owning
                    ICT systems.
                  </p>
                </div>
                <div className="about-button">
                  <button>
                    <a href="/about" className="about-a">
                      Read more
                    </a>
                  </button>
                </div>
              </div>
            </motion.div>
        
       
      </div>
    </div>
  );
}
