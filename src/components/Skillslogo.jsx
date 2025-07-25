import React, { useRef, useState } from "react";
import "../styles/skillslogo.scss";

function SkillsLogo() {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setPositions({ x, y });
  };

  const handleMouseLeave = () => setPositions({ x: 0, y: 0 });

  return (
<>
<div
      className="skillslogo"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="logo"
        src="public\\svgFiles\\Group 7.svg"
        alt="logo1"
        style={{
          transform: `translate(${positions.x * 20}px, ${positions.y * 20}px)`
        }}
      />
      <img
        className="logo"
        src="public\\svgFiles\\Group 6.svg"
        alt="logo2"
        style={{
          transform: `translate(${positions.x * 50}px, ${positions.y * 50}px)`
        }}
      />
       <img
        className="skills"
        src="public\\svgFiles\\SKILLS.svg"
        alt="logo1"
        style={{
          transform: `translate(${positions.x * 20}px, ${positions.y * 20}px)`
        }}
      />
      <img
        className="logo"
        src="public\\svgFiles\\Group 5.svg"
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