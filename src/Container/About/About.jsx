import React from "react";
import "./About.scss";
import { images } from "../../Constants";
import { motion } from "framer-motion";
import ImageCard from "../../Components/ImageCard/ImageCard";
import Title from "../../Components/Title/Title";

export default function About() {
  return (
    <div className="About" id="About us">
      <Title title={"About Us"} visible />

      <div className="about-description">
        <motion.div
          // animate={{ x: [0, 100, 100, 0] }}
          initial={{ x: [0, 100, 0], opacity: 0 }}
          whileInView={{ x: [-300, 0], opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <img
            src={images.aboutus}
            alt="about_illustrate"
            className="about-description-image"
          />
        </motion.div>
        <div className="about-description-details">
          <h1 className="about-tittle">Who we are</h1>
          <div className="about-details">
            <p>
              BUSTEKI PROJECT is a groundbreaking initiative spearheaded by the
              IAA Business Startup Center, a leading institution known for its
              expertise in supporting small-scale entrepreneurs. With a mission
              to catalyze a digital transformation in the field of ICT, the
              project aims to empower institutions and budding entrepreneurs who
              face financial barriers to owning essential ICT systems such as
              websites and applications.
            </p>
            <p>
              At BUSTEKI, we understand the significance of ICT for every
              individual and its potential to drive growth and innovation in
              businesses. Our project is dedicated to leveling the playing field
              by offering accessible and cost-effective solutions that simplify
              the process of developing and owning ICT systems.
            </p>
          </div>
          <div className="button">
            <button>
              <a href="/about">Read more</a>
            </button>
          </div>
          <div className="horiline"></div>
        </div>
      </div>
    </div>
  );
}
