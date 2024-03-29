import React from "react";
import "./Service.scss";
import Title from "../../Components/Title/Title";
import ImageCard from "../../Components/ImageCard/ImageCard";
import { images } from "../../Constants";

export default function Service() {
  return (
    <div className="Service">
      <Title title={"Busteki Services"} id="services" visible />

      <div className="card_holder">
        <ImageCard
          image={images.webdev}
          title={"Web Development"}
          description={
            "Our web development services are geared towards creating stunning and highly functional websites that effectively represent your brand and engage your target audience."
          }
        />
        <ImageCard
          image={images.appdev}
          title={"Mobile Apps Development"}
          description={
            "Our mobile app development services encompass the entire app development lifecycle, from conceptualization to deployment."
          }
        />
        <ImageCard
          image={images.marketing}
          title={"Digital Marketing"}
          description={
            "In today's fast-paced digital landscape, establishing a robust online presence and connecting with your target audience is paramount to the success of your business. Busteki offers a comprehensive suite of digital marketing services designed to propel your brand to new heights in the digital realm."
          }
        />
        <ImageCard
          image={images.icttraining}
          title={"ICT training"}
          description={
            "We offer customized training workshops and sessions for companies and organizations to upskill their staff in ICT. Our training programs cater to various skill levels and can be tailored to specific industry requirements. We cover a diverse range of topics, such as software proficiency, data analysis, cybersecurity best practices, and project management."
          }
        />
      </div>
    </div>
  );
}
