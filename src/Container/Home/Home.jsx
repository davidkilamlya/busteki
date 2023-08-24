import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import Slider from "../../Components/Slider/Slider";
import About from "../About/About";
import Service from "../Service/Service";

import ContactUs from "../Contactus/ContactUs";
import Footer from "../../Components/Footer/Footer";

import "./Home.scss";
import { Outlet } from "react-router-dom";

import Contact from "../../Components/Contact/Contact";
import Plan from "../../Components/Plan/Plan";
import ScrollIndicator from "../../Components/ScrollIndicator/ScrollIndicator";
import LeaveToUs from "../../Components/Leavetous/LeaveToUs";
import { images } from "../../Constants";
import SideContacts from "../../Components/SideContacts/SideContacts";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Slider />
      <ScrollIndicator />
      <Contact />
      <LeaveToUs
        image={images.image23}
        url={"/request"}
        urlTitle={"Request Service"}
        focusTitle={"Welcome To Busteki, We are Happy serve you"}
        titleDescription={
          "We are always happy to see you are benefited from us, in Busteki customer is what comming first."
        }
      />
      <About />
      <LeaveToUs
        image={images.engineer}
        url={"/request"}
        urlTitle={"Request request"}
        focusTitle={"We are the Team of Professionals"}
        titleDescription={
          "We are Committed to make sure your Business, Institution move to the next level"
        }
      />
      <Service />
      <LeaveToUs
        image={images.solution}
        urlTitle={"Request request"}
        url={"/request"}
        focusTitle={"We are the Marketing solution for your business"}
        titleDescription={
          "we are always provide Higher results with small and affordable cost"
        }
      />
      <Plan />
      <LeaveToUs
        image={images.hostingcloud}
        focusTitle={"You have to leave Everything To Us"}
        titleDescription={
          "We Have the Full Experience on Branding Different Businesses Including Yours. fill your requirements here"
        }
        url={"/request"}
        urlTitle={"Request service"}
      />
      <ContactUs />

      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
