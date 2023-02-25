import React, { useState, useEffect } from 'react';
import Particle from "./components/Particle";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import SkillCard from "./components/SkillCard";
import Experience from './components/Experience';

import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ref, listAll, getDownloadURL} from 'firebase/storage';
import {db} from "./Firebase";
import {Route, Routes, Router} from 'react-router-dom';


//the above import is needed for the bootstrap is crucial 

function App() {

  const [info, setInfo] = useState([]);
  const [about, setAbout] = useState([]);
  const [skill, setSkill] = useState(true);
  const [exp, setExp] = useState(false);
  const [image, setImage] = useState([])
   
  
  useEffect( () => {
  //  fetchAPI("/sample.json");
  //  fetchAPI('/about_me.json');
  //  fetchAPI('/experience.json');
  fetchAPI("/my_skills");
  fetchAPI('/about');
  fetchAPI('/experience');
   
   }, [])

  //  useEffect( () => {
  //   listAll(imageRef)
  //  .then((response) =>{
  //   response.items.forEach((item) => {
  //     getDownloadURL(item)
  //     .then((url) => {
  //       setImage((prev) => [...prev, url]);
  //       console.log(url)
  //     })
  //   })
  //  })
   
  //  }, [])

 

   //here we setup firebase
  //  const imageRef = ref(db, "images/");
  //  const dataRef = ref(db, 'stringData/');
   

  // useEffect(() => {
  //   document.body.style.zoom = "30%";
  // }, []);
  
  // const fetchMine = (api) => {
  //   fetch(api)
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((API) => {
  //     setAbout(API);
  //     console.log(API)
  //   })
  // }
  
  function fetchAPI(api){
    switch (api){
      case "/my_skills":
        fetch(api)
        .then( response => {
          return response.json();
        })
        .then(
          (api) => {
            setInfo(api);
        }
        )
        .catch(
          err => {
            console.log("ERROR CAUGHT: resolve");
          }
        )
        break;
      case "/about":
        fetch(api)
        .then( response => {
          return response.json();
        })
        .then(
          (api) => {
            setAbout(api);
        }
        )
        .catch(
          err => {
            console.log("ERROR CAUGHT: resolve");
          }
        )
        break;
      case "/experience":
        fetch(api)
        .then( response => {
          return response.json();
        })
        .then(
          (api) => {
            setImage(api);
        }
        )
        .catch(
          err => {
            console.log("ERROR CAUGHT: resolve");
          }
        )
        break;
      default:
        break;
    }
    // const API = 
    // fetch(API)
    // .then( response => {
    //   return response.json();
    // })
    // .then(
    //   (api) => {
    //     setInfo(api);
    // }
    // )
    // .catch(
    //   err => {
    //     console.log("ERROR CAUGHT: resolve");
    //   }
    // )
  }

  

  return (
    <div className='main-section'>
      <Particle />
      <NavigationBar setSkill={setSkill}  setExp={setExp}/>
      <Routes>
      <Route exact path='/' element={<Header about = {about}/>}></Route>
      <Route exact path='/skills' element={
        <SkillCard 
        info={info}
        key={info.id}
        />
         }>
      </Route>
      <Route exact path='/experience' element={<Experience image = {image} />} />
      </Routes> 
      
      <Footer skill = {skill} exp= {exp}/>
    </div>
  )
}

export default App;

   