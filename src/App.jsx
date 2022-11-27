import React, { useState, useLocation } from "react";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from '/src/pages/home/Home';

import styles from './App.module.scss'

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
            <Route exact path="/" element={<Home/>} />
          </Routes>
      <Footer />
      </div>
  )
}

export default App

