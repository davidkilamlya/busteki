import React from "react";
import "./ImageCard.scss";
import { motion } from "framer-motion";

export default function ImageCard({ image, description, title }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: [300, 0] }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <div className="imageCard">
        <img src={image} alt={`${image}`} key={`image${image}`} />
        {description && (
          <div className="title-description">
            <span className="tittle">{title}</span>
            <div className="description">
            
              <span className="img-card-span">{description}</span>
            </div>
          </div>
        )}
        <div>
          <button>
            <a href="/services">Read More</a>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
