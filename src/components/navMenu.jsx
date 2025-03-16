import React from "react"
import { Link } from "react-router-dom"
import navStyles from '../styles/navMenu.module.scss'

function NavMenu() {

  return (
    <menu className={navStyles.navMenu}>
      <Link className={navStyles.buttonLogo} to="/"></Link>
      <div className={navStyles.LinkContainer}>
        <button id="switchTheme" className={navStyles.switchTheme}></button>
        <Link className={navStyles.Link} to="/">home</Link>
        <Link className={navStyles.Link} to="/">blog</Link>
        <Link className={navStyles.Link} to="/cv">CV</Link>
      </div>
    </menu>
  )

}

export default NavMenu