import React from "react";
import { NavBar } from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { AiOutlineHome } from "react-icons/ai";
import "./Aboutus.scss";
import Title from "../Title/Title";
import SinglepagePath from "../Singlepage/SinglepagePath";
import Team from "../../Container/Team/Team";

function Aboutus() {
  return (
    <div className="aboutus">
      {/* <NavBar /> */}
      <SinglepagePath />
      <div className="about-main">
        <Title title={"Busteki/About us"} visible />
        <div className="details">
          <p className="about-text">
            BUSTEKI PROJECT is a groundbreaking initiative spearheaded by the
            IAA Business Startup Center, a leading institution known for its
            expertise in supporting small-scale entrepreneurs. With a mission to
            catalyze a digital transformation in the field of ICT, the project
            aims to empower institutions and budding entrepreneurs who face
            financial barriers to owning essential ICT systems such as websites
            and applications.
          </p>
          <p className="about-text">
            At BUSTEKI, we understand the significance of ICT for every
            individual and its potential to drive growth and innovation in
            businesses. Our project is dedicated to leveling the playing field
            by offering accessible and cost-effective solutions that simplify
            the process of developing and owning ICT systems.
          </p>
          <p className="about-text">
            Our team of seasoned professionals, comprising experts in ICT and
            business development, brings a wealth of knowledge and experience to
            the table. With a deep understanding of the challenges faced by
            small-scale entrepreneurs, we are committed to providing
            comprehensive support and guidance throughout their digital journey.
          </p>
          <p className="about-text">
            Through our range of web applications, we offer a suite of services
            tailored to various sectors. From website development for different
            industries to mobile application creation, our soft projects are
            designed to cater to the diverse needs of our clients.
          </p>
          <p className="about-text">
            One of our flagship offerings is a healthcare system that
            revolutionizes patient care. Institutions can leverage our solution
            to streamline appointments, offer personalized advice, and enable
            online consultations with healthcare professionals. This not only
            ensures privacy but also saves time and reduces the costs associated
            with physical hospital visits.
          </p>
          <p className="about-text">
            Additionally, our sales/business system facilitates collaboration
            among entrepreneurs by allowing multiple individuals to share the
            cost of owning a website or application. By pooling resources,
            businesses can leverage the benefits of ICT without incurring
            substantial financial burdens.
          </p>
          <p className="about-text">
            We also cater to the educational sector with our educational
            institution system. This solution enables multiple institutions to
            share the costs of a comprehensive website, supporting their
            educational goals and reducing individual expenses.
          </p>
          <p className="about-text">
            Recognizing the importance of skill enhancement in the digital era,
            we offer a range of ICT training programs for children, students,
            business owners, and employees. These programs provide online
            learning opportunities to augment their knowledge and proficiency in
            various ICT domains.
          </p>
          <p className="about-text">
            At BUSTEKI, we are driven by a vision to bridge the digital divide
            and make ICT accessible to all. By offering tangible devices and
            embracing emerging technologies such as IoT, we aim to bring about a
            paradigm shift in how individuals and organizations harness the
            power of technology to transform their lives and businesses.
          </p>
          <p className="about-text">
            Contact us today to embark on a transformative digital journey with
            BUSTEKI PROJECT. Together, let's unlock the full potential of ICT
            and drive innovation in your endeavors.
          </p>
        </div>
        <Team/>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Aboutus;
