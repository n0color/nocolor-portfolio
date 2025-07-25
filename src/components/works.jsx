import React from "react";
import "../styles/works.scss";
import bubbleBg from "../../public/svgFiles/bubbleAnimate/bub1.svg";
import firstTriangles from "../../public/svgFiles/firsTriangles.svg";
import secondTriangles from "../../public/svgFiles/secTriangles.svg";
import thirdTriangles from "../../public/svgFiles/thrdTriangles.svg";
import work1 from "../../public/igroteka.png";
import work2 from "../../public/usadba.png";

export default function Works() {
  return (
    <div className="works">
      <img src={work1} className="work1" alt="work1" />
      <img src={work2} className="work2" alt="work2" />
      <img src={bubbleBg} className="bubbleBg" />
      <img src={firstTriangles} className="firstTriangles" />
      <img src={secondTriangles} className="secondTriangles" />
      <img src={thirdTriangles} className="thirdTriangles" />
    </div>
  );
}