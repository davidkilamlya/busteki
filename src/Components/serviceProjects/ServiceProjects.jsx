import React from "react";
import SinglepagePath from "../Singlepage/SinglepagePath";
import "./ServiceProjects.scss";
import Title from "../Title/Title";

import { servicesImages } from "../../Constants";

function ServiceProjects() {
  const servicesImagesdata = [
    {
      name: "web development",
      image: servicesImages.webDevelopment,
      description1:
        " Our web development services are geared towards creating stunning and highly functional websites that effectively represent your brand and engage your target audience.",
      description2:
        "Our team of experienced developers utilizes the latest technologies and industry best practices to deliver custom web solutions tailored to your specific needs. From responsive design to seamless user experience, we ensure that your website not only looks impressive but also performs flawlessly across different devices and browsers.",
    },
    {
      name: "App development",
      image: servicesImages.appDevelopment,
      description1:
        " Our web development services are geared towards creating stunning and highly functional websites that effectively represent your brand and engage your target audience.",
      description2:
        "Our team of experienced developers utilizes the latest technologies and industry best practices to deliver custom web solutions tailored to your specific needs. From responsive design to seamless user experience, we ensure that your website not only looks impressive but also performs flawlessly across different devices and browsers.",
    },
    {
      name: "web development",
      image: servicesImages.webDevelopment,
      description1:
        " Our web development services are geared towards creating stunning and highly functional websites that effectively represent your brand and engage your target audience.",
      description2:
        "Our team of experienced developers utilizes the latest technologies and industry best practices to deliver custom web solutions tailored to your specific needs. From responsive design to seamless user experience, we ensure that your website not only looks impressive but also performs flawlessly across different devices and browsers.",
    },
  ];

  return (
    <div className="service-projects">
      <SinglepagePath />
      <div className="main-service-projects-container">
        <div className="service-container">
          <Title title={"Busteki/Services"} visible />
          <div className="services">
            {servicesImagesdata.map((item, index) => {
              return (
                <div className="card-holder" key={index}>
                  <div className="service-title">
                    <h2 className="sevice-title-p">{item.name}</h2>
                  </div>
                  <div className="service-image">
                    <img
                      src={item.image}
                      alt=""
                      className="service-image-img"
                    />
                  </div>
                  <div className="service-description">
                    <p className="service-description-p">{item.description1}</p>
                    <br />

                    <p className="service-description-p">{item.description2}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="project-container">
          <Title title={"Busteki/Projects"} visible />
          <div className="projects"></div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProjects;
