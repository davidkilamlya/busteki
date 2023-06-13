import React from "react";
import "./Service.scss";
import Title from "../../Components/Title/Title";
import ImageCard from "../../Components/ImageCard/ImageCard";
import { images } from "../../Constants";


export default function Service() {
  return (
    <div className="Service" id="services">
      <Title title={"Features & Services"} visible />
     
        <div className="card_holder">
          <ImageCard
            image={images.webdev}
            title={"Web Development"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus rem eos at excepturi? Doloribus quo minima harum eveniet quas labore magni tempora numquam. Adipisci aperiam alias, ullam officia sapiente porro."
            }
          />
          <ImageCard
            image={images.appdev}
            title={"Mobile Apps Development"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus rem eos at excepturi? Doloribus quo minima harum eveniet quas labore magni tempora numquam. Adipisci aperiam alias, ullam officia sapiente porro."
            }
          />
          <ImageCard
            image={images.about_illustrate}
            title={"Web Development"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus rem eos at excepturi? Doloribus quo minima harum eveniet quas labore magni tempora numquam. Adipisci aperiam alias, ullam officia sapiente porro."
            }
            
          />
          
        </div>
      
    </div>
  );
}
