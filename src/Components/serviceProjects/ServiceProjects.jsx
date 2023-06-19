import React from "react";
import SinglepagePath from "../Singlepage/SinglepagePath";
import "./ServiceProjects.scss";
import Title from "../Title/Title";

import { servicesImages } from "../../Constants";
import { NavBar } from "../NavBar/NavBar";

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
        " Our mobile app development services encompass the entire app development lifecycle, from conceptualization to deployment.",
      description2:
        " We specialize in building native and cross-platform mobile applications that deliver exceptional user experiences. Our team follows industry standards and employs agile development methodologies to create apps that are intuitive, feature-rich, and scalable. Whether you need an app for iOS, Android, or both platforms, we have the expertise to turn your vision into a reality.",
    },
    {
      name: "Workshops",
      image: servicesImages.webDevelopment,
      description1:
        " Our workshops provide an interactive learning environment where individuals and businesses can gain in-depth knowledge about specific ICT topics. Covering subjects such as website development, mobile application design, digital marketing strategies, cybersecurity essentials, and emerging technologies, our workshops empower participants with practical skills and insights. Led by industry experts, these workshops combine theory and hands-on exercises to ensure participants can immediately apply their newly acquired knowledge to real-world scenarios.",
      description2:
        "Participants leave our workshops equipped with the tools and know-how to leverage technology effectively and drive innovation in their respective domains.",
    },
    {
      name: "Workshops",
      image: servicesImages.webDevelopment,
      description1:
        " Our workshops provide an interactive learning environment where individuals and businesses can gain in-depth knowledge about specific ICT topics. Covering subjects such as website development, mobile application design, digital marketing strategies, cybersecurity essentials, and emerging technologies, our workshops empower participants with practical skills and insights. Led by industry experts, these workshops combine theory and hands-on exercises to ensure participants can immediately apply their newly acquired knowledge to real-world scenarios.",
      description2:
        "Participants leave our workshops equipped with the tools and know-how to leverage technology effectively and drive innovation in their respective domains.",
    },
  ];

  return (
    <div className="service-projects">
      <SinglepagePath />
      {/* <NavBar/> */}
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
