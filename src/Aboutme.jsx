import React from "react";
import aboutMe from "./styles/aboutMe.module.scss"

export default function AboutMe() {

  return (
    <>
    <hr className={aboutMe.hr} />  
    <div className={aboutMe.container}>
      <img src="public/MyPhoto.png" alt="MyPhoto"/>
      <div className={aboutMe.textContainer}>
        <h2>About me</h2>
        <p className={aboutMe.textParagraph}>
        My name is Ivan, I am an aspiring frontend developer from Krasnodar.
        I study at the Krasnodar College of Electronic Instrumentation (KKEP).
        This little portfolio will tell you about my skills.
        </p>

      </div>
    </div>
    </>
  )

}