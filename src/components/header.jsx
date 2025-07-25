import '../styles/header.scss'
import { useState, useEffect } from 'react';

import SocialLinks from './socialLinks';

export default function Header() {

  const [windowsWidth, setWindowsWidth] = useState(0);
  const canHover = window.matchMedia('(hover: hover)').matches;

  console.log(canHover)

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, [])

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
      return [...Array(nbOfBlocks).keys()].map((_, index) => {
        return <div onMouseEnter={canHover ? (e) => {colorize(e.target)} : null} key={index}></div>
    })
  }
let counter = 0;
  const colorize = (el) => {
    counter++;
    if(counter === 10) {
      el.style.backgroundColor = '#555555' 
      counter = Math.floor(Math.random() * 10);;
    }   
    else
      el.style.backgroundColor = 'var(--color-second)';
    setTimeout( () => {
      el.style.backgroundColor = 'transparent';
    }, 230)
  }
  
  return (
    <>
      <div className="headerContainer">
        <div className="body">
          <h1>NOCOLOR?</h1>
          <span>student, developer</span>
        </div>
        <div className="links">
          <SocialLinks path='svgFiles/vk.svg' link='https://vk.com/addnothing'/>
          <SocialLinks path='svgFiles/gmail.svg' link='mailto:nocolor.web@gmail.com' />
          <SocialLinks path='svgFiles/github.svg' link='https://github.com/n0color' />
          <SocialLinks path='svgFiles/telegram.svg' link='https://t.me/addnothing' />
        </div>
        <div className="grid">
          {
            windowsWidth > 0 && [...Array(20).keys()].map( (_, index) => {
              return <div key={index} className="column">
                  {
                    getBlocks()
                  }
              </div>
            })
          }
          
        </div>
      </div>
    </>
  )
}
