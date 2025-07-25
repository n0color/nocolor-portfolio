import React from "react"
import { Link } from "react-router-dom"
import '../styles/navMenu.scss'

function NavMenu() {

  function onLogoClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  function switchTheme() {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <menu className="navMenu">
      <button className="buttonLogo" onClick={() => onLogoClick()}></button>
      <div className="LinkContainer">
        <button id="switchTheme" className="switchTheme" onClick={switchTheme}></button>
        <Link className="Link" to="/#">works</Link>
        <Link className="Link" to="/">blog</Link>
        <Link className="Link" to="/cv">CV</Link>
      </div>
    </menu>
  )

}

export default NavMenu