import React from "react";
import styles from '../styles/header.module.scss'

function SocialLinks({ link, path }) {
  return (
    <a href={link}>
      <img src={path} alt="Social Link"/>
    </a>
  )
}

export default SocialLinks;