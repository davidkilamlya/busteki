import React, { useEffect, useRef, useState } from "react";
import Title from "../../Components/Title/Title";
import images from "../../Constants/images";
import "./Work.scss";
import { IoMdOpen, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

function Work() {
  const projectsData = [
    {
      name: "Elimuhub",
      href: "https://elimuhub.co.tz",
      image: images.elimuhub,
    },
    {
      name: "Elimuhub",
      href: "https://elimuhub.co.tz",
      image: images.elimuhub,
    },
    {
      name: "Elimuhub",
      href: "https://elimuhub.co.tz",
      image: images.elimuhub,
    },
    {
      name: "Elimuhub",
      href: "https://elimuhub.co.tz",
      image: images.elimuhub,
    },
   
   
  ];
  //hooks
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  //use ref
  const divRef = useRef(null);
  const xDimensionRef = useRef(0);

  const updateXDimension = (direction) => {
    setIsMoved(true);
    const { left, right } = divRef.current.getBoundingClientRect();
    const xDimension = right - left;
    xDimensionRef.current = xDimension;
    let distance = xDimensionRef.current;
    if (direction === "left" && slideNumber>0) {
      setSlideNumber(slideNumber -1);
      divRef.current.style.transform=`translateX(${distance/2}px)`
    }
    if(direction==="right" && slideNumber < projectsData.length-1){
      setSlideNumber(slideNumber + 1);
      divRef.current.style.transform = `translateX(${-distance/2}px)`;
    }

   

    // Additional logic or side effects based on dimension change can be performed here
    console.log("Dimension changed!", distance);
  };
  const divStyle = {
    transform: `translateX(${slideNumber}px)`,
  };

  return (
    <div className="work" id="Work">
      <Title visible title={"Featured projects"} />

      <div className="work-project">
        <div className="arrow" onClick={()=>{updateXDimension("right")}}>
          <IoIosArrowBack />
        </div>
        <div
          // style={divStyle}
          className="container-img-btn "
          // transition={{ duration: 1.2, ease: "anticipate" }}
          // whileInView={{ size: 1, x: [-300, 0] }}
          ref={divRef}
        >
          {projectsData.map((item, index) => (
            <div className="img-btn" key={index}>
              <img
                src={projectsData[0].image}
                className="project-image"
                alt={`${projectsData[0].name}`}
              />
              <div className="work-title">
                <h4 className="name-desc">{projectsData[0].name}</h4>
                <span className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minima ipsa doloribus eius reprehenderit. Facere repudiandae
                  sit cum iste delectus, nemo, accusantium esse dolorum
                  explicabo numquam et dignissimos beatae nisi aliquam?
                </span>
                <button className="work-project-visit-site">
                  <a
                    href={projectsData[0].href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Visit a site
                  </a>
                  <IoMdOpen className="open" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="arrow" onClick={()=>{updateXDimension("left")}}>
         
          <IoIosArrowForward />
        </div>
      </div>
      {/* <button className="viewmore-button">
        <a className="viewmore-link" href="/projects">
          View more
        </a>
      </button> */}
    </div>
  );
}

export default Work;
