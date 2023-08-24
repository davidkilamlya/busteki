// AboutUsDetails.js
import React from "react";
import "./AboutUsPage.scss";
import { images } from "../../Constants";
import Footer from "../Footer/Footer";
import { motion, circInOut } from "framer-motion";
import { Helmet } from "react-helmet-async";

import ReusableHeader from "../ReusableHeader/ReusableHeader";

// import aboutImage from "../assets/images/about.jpg"; // Update with your image paths
// import missionImage from "../assets/images/mission.jpg";
// import visionImage from "../assets/images/vision.jpg";

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Busteki</title>
        <meta
          name="description"
          content="Learn about Busteki, a technology startup with a mission to revolutionize technology and empower individuals and businesses."
        />
        <meta
          name="keywords"
          content="Busteki, technology startup, mission, empowerment, innovation,company"
        />
        <meta property="og:title" content="About Us - Busteki" />
        <meta
          property="og:description"
          content="Contact Busteki for inquiries about our services, partnerships, and more."
        />
        <meta property="og:url" content="https://www.busteki.co.tz/about" />
        <meta property="og:type" content="website" />
      </Helmet>
      <ReusableHeader pageTitle={"About BusTeki"} />
      {/* <PageHeader title={"About St. Monica girls Secondary"} /> */}
      <div className="about-us-details">
        <motion.div
          initial={{ x: [-300, 300] }}
          whileInView={{
            x: [300, 0],
            transition: { circInOut, duration: 1 },
          }}
          className="section "
        >
          <div>
            <h2 className="about-page-title">About us</h2>
          </div>
          <img src={images.leavetous1} alt="About Us" className="img" />
          <div className="description">
            <p>
              At Busteki, we are dedicated to transforming the landscape of
              technology and information services. Our mission is to empower
              individuals, businesses, and institutions with cutting-edge
              technological solutions that drive growth, innovation, and
              efficiency.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: [-300, 300] }}
          whileInView={{
            x: [300, 0],
            transition: { circInOut, duration: 1 },
          }}
          className="section mission"
        >
          <h2 className="about-page-title">Mission</h2>

          <img src={images.emailcampagn} alt="Mission" className="img" />
          <div className="description">
            <p>
              Whether you're an aspiring entrepreneur, a growing business, or an
              educational institution looking to embrace the digital age,
              Busteki is your partner on the path to success. Join us on our
              mission to revolutionize the world of technology.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: [-300, 300] }}
          whileInView={{
            x: [300, 0],
            transition: { circInOut, duration: 1 },
          }}
          className="section"
        >
          <h2 className="about-page-title">Vision</h2>

          <img src={images.web2} alt="Vision" className="img" />
          <div className="description">
            <p>
              Our vision is to create a world where technology knows no
              boundaries. We envision a future where startups, small businesses,
              educational institutions, and healthcare providers can all
              leverage the full potential of technology to thrive and serve
              their communities.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
