import React from "react";
import "./About.css";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);

  return (
    <div className="about__container">
      <span>
        "Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows."
      </span>
      <span>- George Orwell, 1984</span>
    </div>
  );
}

export default About;
