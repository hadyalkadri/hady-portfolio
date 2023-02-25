import React, {useState} from 'react';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

function Footer({skill, exp}) {

  const [color, setColor] = useState(false)

  let iconStyles = {
    fontSize: '25px'                      
}
  const changeFooterColor = () => {
    if (window.scrollY >=80 ){
      setColor(true)
    }
    else{
      setColor(false)
    }
    console.log(window.scrollY)
  }
    window.addEventListener('scroll', changeFooterColor)
  
  return (
    <div className={exp ? `footerExperience` : null}>
      <span className='footerMain'>
      <div className={skill ? `footer fixed-bottom` : `footerSkills`} id={color ?  null :'footerColor' }>
        <a href='https://github.com/hadyalkadri' target="_blank"><FaGithub style={iconStyles} className='icons' /></a>
        <a href='https://www.linkedin.com/in/hady-alkadri-7813ab18b/' target="_blank"><FaLinkedin  style={iconStyles} className='icons' /></a>
        <a href='https://www.instagram.com/hadyalkaderi/' target="_blank"><FaInstagram style={iconStyles} className='icons' /></a>
      </div>
      </span>
    </div>
  )
}

export default Footer
