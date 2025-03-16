import React from "react";
import { Link } from "react-router-dom"

import Header from "./header";
import NavMenu from "./components/navMenu";

export default function App() {

  return (
   <>
     <NavMenu />
     <Header />
   </>
  )
}