
import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Employee Tracker",
    image: "/img/employee.jpg",
    repositery: "https://github.com/manny1998/Employee-Tracker",
    link: "https://drive.google.com/file/d/1qhBdP13HoJ-5L3pith829F98iiPV3K4C/view",
  },
  {
    id: 1,
    title: "Text Editor",
    image: "/img/text.jpg",
    repositery: "https://github.com/manny1998/Text-editor",
    link: "https://lit-depths-50475.herokuapp.com/",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    image: "/img/weather.jpg",
    repositery: "https://github.com/manny1998/Weather-Dashboard",
    link: "https://manny1998.github.io/Weather-Dashboard/",
  },
  {
    id: 3,
    title: "Social Network API",
    image: "/img/social.jpg",
    repositery: "https://github.com/manny1998/Social-network-api",
    link: "https://drive.google.com/file/d/1sBxm-4CydQzB8w5k058ODXzuE7Pz73XY/view",
  },
  {
    id: 4,
    title: "Travel Planner",
    image: "/img/travel.png",
    repo: "https://github.com/CharDige/Travel-planner",
    live: "https://chardige.github.io/Travel-planner/",
  },
  {
    id: 5,
    title: "Password Generator",
    image: "/img/password.jpg",
    repo: "https://github.com/manny1998/Javascript-password-generator",
    live: "https://manny1998.github.io/Javascript-password-generator/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;