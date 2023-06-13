import React from "react";
import Title from "../../Components/Title/Title";
import images from "../../Constants/images";
import  "./Team.scss"

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

function Team() {
  return (
    <div className="team" id="team">
      <Title title={"Team"} visible/>
      <div className="teamContainer">
        {projectsData.map((item, index) => (
          <div className="teamContent" key={index}>
            
              <img src={item.image} alt={index} className="img" />
           
            <div className="teamProfile">
              <h5 className="teamName">{item.name}</h5>
              <span className="title">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
