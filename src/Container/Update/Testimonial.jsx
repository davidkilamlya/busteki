import React, { useEffect, useRef, useState } from "react";
import "./Testimonial.scss";
import Title from "../../Components/Title/Title";
import images from "../../Constants/images";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const projectsData = [
  {
    name: "Elimuhub",
    href: "https://elimuhub.co.tz",
    image: images.david,
    title: "Customer",
  },
  {
    name: "David kilamlya",
    href: "https://elimuhub.co.tz",
    image: images.david,
    title: "customer",
  },
  {
    name: "David kilamlya",
    href: "https://elimuhub.co.tz",
    image: images.david,
    title: "customer",
  },
  {
    name: "David kilamlya",
    href: "https://elimuhub.co.tz",
    image: images.david,
    title: "customer",
  },
  {
    name: "David kilamlya",
    href: "https://elimuhub.co.tz",
    image: images.david,
    title: "customer",
  },
];

function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const divRef = useRef();
  const parentDivRef = useRef();
  const [startX, setStartX] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
    setIsScrolling(true);
  };

  const handleTouchMove = (event) => {
    if (!isScrolling) return;

    const currentX = event.touches[0].clientX;
    const diffX = startX - currentX;

    divRef.current.style.transform = `translateX(-${
      currentSlide * window.innerWidth + diffX
    }px)`;
  };

  const handleTouchEnd = () => {
    setIsScrolling(false);

    const containerWidth = divRef.current.offsetWidth;
    const slideWidth = window.innerWidth;

    const diffX = startX - divRef.current.getBoundingClientRect().left;

    if (Math.abs(diffX) > slideWidth / 4) {
      if (diffX > 0 && currentSlide < projectsData.length - 1) {
        setCurrentSlide(currentSlide + 2);
      } else if (diffX < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }

    divRef.current.style.transform = `translateX(-${
      currentSlide * slideWidth
    }px)`;
  };

  const handleClick = (direction) => {
    const { left } = divRef.current.getBoundingClientRect();
    console.log("left value is ", left);

    if (direction === "left" && currentSlide < projectsData.length - 1) {
      console.log("div properties>>", divRef);
      setCurrentSlide(currentSlide + 1);
      divRef.current.scrollBy({
        left: window.innerWidth,
        behavior: "smooth",
      });
    } else if (direction === "right" && currentSlide > 0) {
      console.log("div properties>>", divRef);
      setCurrentSlide(currentSlide - 1);
      divRef.current.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth",
      });
    }
    console.log("current slide is >>", currentSlide);
    console.log(
      "parent-width>>",
      parentDivRef.current.clientWidth,
      "slide-width ",
      divRef.current.children[0].offsetWidth,
      "visible cards ",
      Math.floor(
        (divRef.current.children[0].offsetWidth /
          parentDivRef.current.clientWidth) *
          projectsData.length
      )
    );
  };
  return (
    <div className="Testimonial">
      <Title title={"Testimonial"} visible />

      <div className="arrow-card">
        <div className="update-container" ref={parentDivRef}>
          <div
            className="arrow-testimonial-left"
            onClick={() => handleClick("left")}
          >
            <IoIosArrowBack />
          </div>
          <div
            className="card-testimonial"
            ref={divRef}
            id="Testimonial"
            style={{
              transform: `translateX(-${currentSlide * 10}%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projectsData.map((item, index) => (
              <div key={index} className="update-container-details">
                {console.log("div--", index)}

                <div className="update-container-description">
                  <div className="p-description">
                    <p className="description">
                      <q>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Fugiat et consequatur quos neque repudiandae
                        quaerat mollitia placeat sint recusandae praesentium?
                        Tempora numquam nostrum ullam. Facilis fugit libero
                        voluptatibus asperiores veritatis.
                      </q>
                    </p>
                  </div>

                  <div className="profile">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="update-container-image"
                    />

                    <div className="customer-details">
                      <h2 className="name">{item.name}</h2>
                      <span className="title">{item.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="arrow-testimonial-right"
            onClick={() => handleClick("right")}
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
