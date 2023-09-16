import { useState, useEffect } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";

import About from "../About/About";
import Service from "../Service/Service";

import ContactUs from "../Contactus/ContactUs";
import Footer from "../../Components/Footer/Footer";

import "./Home.scss";
import { Outlet } from "react-router-dom";

import Plan from "../../Components/Plan/Plan";
import LeaveToUs from "../../Components/Leavetous/LeaveToUs";
import { images } from "../../Constants";

import Loader from "../../Components/Loader/Loader";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="Home">
      {isLoading && <Loader />}
      <NavBar />
      <LeaveToUs
        image={images.image23}
        url={"/request"}
        urlTitle={"Request Service"}
        focusTitle={"Welcome To Busteki, We are Happy to serve you"}
        titleDescription={
          "We are always happy to see you are benefited from us, in Busteki customer is what comming first."
        }
      />
      <About />

      <LeaveToUs
        image={images.engineer}
        url={"/request"}
        urlTitle={"Request service"}
        focusTitle={"We are the Team of Professionals"}
        titleDescription={
          "We are Committed to make sure your Business, Institution move to the next level"
        }
      />

      <Service />
      <LeaveToUs
        image={images.solution}
        urlTitle={"Request service"}
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
