import React from "react";
import "../styles/works.scss";
import bubbleBg from "../assets/svgFiles/bubbleAnimate/bub1.svg";
import firstTriangles from "../assets/svgFiles/firsTriangles.svg";
import secondTriangles from "../assets/svgFiles/secTriangles.svg";
import thirdTriangles from "../assets/svgFiles/thrdTriangles.svg";
import work1 from "../assets/igroteka.png";
import work2 from "../assets/usadba.png";

import { useMousePosition } from "../hooks/useMousePosition";

export default function Works() {
  const { containerRef, positions, handleMouseMove, handleMouseLeave } = useMousePosition();
  return (
    <div className="works" ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="work1">
        <img src={work1} className="work1img" alt="work1" />
        <p className="work1text">Igroteka is a full-stack project created as part of a coursework assignment.
           The project is implemented in two parts: the backend is written in Laravel, 
           and the frontend is built with React.
        <a href="https://github.com/n0color/igroteka"> Frontend repository</a>
        </p>
      </div>
      <div className="work2">
        <img src={work2} className="work2img" alt="work2" />
        <p className="work2text">
        The “Usadba Derevinka” website is a Russian recreational base, 
        developed using native React and employing the SCSS preprocessor. 
        You can find the repository on GitHub.
        <a href="https://github.com/n0color/usadbaderevenka"> Repository</a>
        </p>
      </div>
      <img src={bubbleBg} className="bubbleBg" />
      <img src={firstTriangles} className="firstTriangles" style={{
        transform: `translate(${positions.x * 20}px, ${positions.y * 20}px)`
      }} />
      <img src={secondTriangles} className="secondTriangles" style={{
        transform: `translate(${positions.x * 50}px, ${positions.y * 50}px)`
      }} />
      <img src={thirdTriangles} className="thirdTriangles" style={{
        transform: `translate(${positions.x * 80}px, ${positions.y * 80}px)`
      }} />
    </div>
  );
}