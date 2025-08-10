import React from "react";
import "../styles/header.scss";
function SocialLinks({ link, lightIcon, darkIcon }) {
  return (
    <a href={link}>
      <img 
        src={lightIcon} 
        alt="Social Link"
        className="social-icon-light"
      />
      <img 
        src={darkIcon} 
        alt="Social Link"
        className="social-icon-dark"
      />
    </a>
  )
}

export default SocialLinks;