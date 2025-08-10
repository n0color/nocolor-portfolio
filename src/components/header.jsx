import '../styles/header.scss'
import { useState, useEffect } from 'react';
import SocialLinks from './socialLinks';
import vkIcon from '../assets/svgFiles/vk.svg';
import gmailIcon from '../assets/svgFiles/gmail.svg';
import githubIcon from '../assets/svgFiles/github.svg';
import telegramIcon from '../assets/svgFiles/telegram.svg';
import vkIcon2 from '../assets/svgFiles/vk2.svg';
import gmailIcon2 from '../assets/svgFiles/gmail2.svg';
import githubIcon2 from '../assets/svgFiles/github2.svg';
import telegramIcon2 from '../assets/svgFiles/telegram2.svg';

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
          <SocialLinks lightIcon={vkIcon} darkIcon={vkIcon2} link='https://vk.com/addnothing'/>
          <SocialLinks lightIcon={gmailIcon} darkIcon={gmailIcon2} link='mailto:nocolor.web@gmail.com' />
          <SocialLinks lightIcon={githubIcon} darkIcon={githubIcon2} link='https://github.com/n0color' />
          <SocialLinks lightIcon={telegramIcon} darkIcon={telegramIcon2} link='https://t.me/addnothing' />
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
