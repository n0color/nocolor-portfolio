import React from "react";


function SocialLinks({ link, path }) {
  return (
    <a href={link}>
      <img src={path} alt="Social Link"/>
    </a>
  )
}

export default SocialLinks;