import React from "react";  
import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon1 from "../components/img/linkedin-svgrepo-com.svg";
import icon2 from "../components/img/github-svgrepo-com.svg";
import icon3 from "../components/img/instagram-svgrepo-com.svg";
import {Link} from 'react-router-dom';


function NavigationBar ({setSkill, setExp}) {

    // const navigate = useNavigate();

    //to know where the hell you are
    const [place, setPlace] = useState("home")
    //intial effects will change when you start scrolling
    const [color, setColor] = useState(false)
    //to detect when you scroll
   

  //navbar-dark => color is white and navbar-light => font color is black
  // const changeNavColor = () => {
  //   if (window.scrollY >=80 ){
  //     setColor(true)
  //   }
  //   else{
  //     setColor(false)
  //   }
  //   console.log(window.scrollY)
  // }
  //   window.addEventListener('scroll', changeNavColor)
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id={color ? "navbar-custom active" : "navbar-custom"}>
  <Container style={{padding: "5px"}}>
  <a className="navbar-brand" href="#">Hady Alkadri</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#HOME" onClick={() => {setSkill(true); setExp(false)}}><Link className='skills_link' to='/'>Home</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skills" onClick={() => {setSkill(false); setExp(false)}}><Link className = 'skills_link' to='/skills'>Skills</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#experience" onClick={() => setExp(true)}><Link className = 'skills_link' to='/experience'>Experience</Link></a>
      </li>
    </ul>
    
  </div>
  </Container>
</nav>
    </div>
  )
  } 
  // <a href="" ><img src={icon1}></ img></a>

export default NavigationBar;