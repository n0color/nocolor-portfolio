import React from "react";
import "../styles/aboutMe.scss"

export default function AboutMe() {

  return (
    <>
    <hr className="hr" />  
    <div className="container">
      <img className="img" src="public/MyPhoto.png" alt="MyPhoto"/>
      <div className="textContainer">
        <h2>About me</h2>
        <p className="textParagraph">
        My name is Ivan, I am an aspiring frontend developer from Krasnodar.
        I study at the Krasnodar College of Electronic Instrumentation (KKEP).
        This little portfolio will tell you about my skills.
        </p>

      </div>
    </div>
    </>
  )

}