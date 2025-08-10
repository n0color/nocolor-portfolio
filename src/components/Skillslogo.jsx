import React from "react";
import "../styles/skillslogo.scss";
import { useMousePosition } from "../hooks/useMousePosition";
import group7 from "../assets/svgFiles/Group 7.svg";
import group6 from "../assets/svgFiles/Group 6.svg";
import group5 from "../assets/svgFiles/Group 5.svg";
import skills from "../assets/svgFiles/SKILLS.svg";

function SkillsLogo() {
  const { containerRef, positions, handleMouseMove, handleMouseLeave } = useMousePosition();

  return (
<>
<div
      id="works"
      className="skillslogo"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="logo"
        src={group7}
        alt="logo1"
        style={{
          transform: `translate(${positions.x * 20}px, ${positions.y * 20}px)`
        }}
      />
      <img
        className="logo"
        src={group6}
        alt="logo2"
        style={{
          transform: `translate(${positions.x * 50}px, ${positions.y * 50}px)`
        }}
      />
       <img
        className="skills"
        src={skills}
        alt="logo1"
        style={{
          transform: `translate(${positions.x * 20}px, ${positions.y * 20}px)`
        }}
      />
      <img
        className="logo"
        src={group5}
        alt="logo3"
        style={{
          transform: `translate(${positions.x * 150}px, ${positions.y * 150}px)`
        }}
      />
      
    </div>
    </>
  );
}

export default SkillsLogo;