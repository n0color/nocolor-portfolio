import React from "react";

import Header from "./components/header";
import NavMenu from "./components/navMenu";
import AboutMe from "./components/Aboutme";
import SkillsLogo from "./components/Skillslogo";
import Works from "./components/works";

export default function App() {

  return (
   <>
     <NavMenu />
     <Header />
     <AboutMe />
     <SkillsLogo />
     <Works />
   </>
  )
}