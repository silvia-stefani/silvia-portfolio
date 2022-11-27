import React, { useState, useLocation } from "react";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import ProjectsCases from './pages/projects/ProjectsAndCases';
import SinglePage from './pages/projects/singlePage/SinglePage';

import styles from './App.module.scss'
import {projects} from './models/curriculum/experience';

import { Routes, Route } from 'react-router-dom';


const App = () => {

  const [x, setX] = useState()
  const [y, setY] = useState()

  const onMouseMove = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }
  
  return (
    
      <div onMouseMove={onMouseMove} className={styles.App}>
      <div className={styles.pointColor} style={{left: x, top: y, width: (x*3) + "px", height: (y*3) + "px"}}>
        <span className={styles.point}></span>
      </div>
      <Header />
          <Routes>
            <Route path="/projects" element={<ProjectsCases/>} />
            <Route exact path="/" element={<Home/>} />
            {projects.map((data, i) => (
              <Route key={i} path={`/`+data.slug} element={<SinglePage slug={data.slug}/>} />
            ))}
          </Routes>
      <Footer />
      </div>
  )
}

export default App

