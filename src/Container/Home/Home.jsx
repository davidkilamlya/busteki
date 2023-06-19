import React from 'react'
import { NavBar } from '../../Components/NavBar/NavBar';
import Slider from '../../Components/Slider/Slider';
import About from '../About/About';
import Service from '../Service/Service';
import Testimonial from '../Update/Testimonial';
import Team from '../Team/Team';
import Work from '../Work/Work';
import ContactUs from '../Contactus/ContactUs';
import Footer from '../../Components/Footer/Footer';
import "./Home.scss"
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Slider />
      <About />
      <Service />
      <Work />
      <Testimonial />
      <Team />
      <ContactUs />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default Home