import React, { useState, useEffect } from "react";
import styles from './Home.module.scss';
import about from '/src/models/about';

import { motion } from "framer-motion";

import Tag from "../../components/tag/Tag";
import Spotify from "react-spotify-embed";


export default function Home() {

  const [x, setX] = useState()
  const [y, setY] = useState()

  const onMouseMove = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }
  
  return (

    <main onMouseMove={onMouseMove} className={styles.Home}>

      <motion.div className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 7, type: "spring", ease: "easeIn" }} >
          
          <h2>

          I'm Silvia, a interactive designer born in Mallorca and currently based in Madrid. With a 
          <span className={styles.pop}>
            graphic design formation
            <div className={styles.pop_box} style={{ top: y, left: x }}>
                <Tag label={about.studies[1].when} />
                <Tag label={about.studies[1].level+ " in " +about.studies[1].what} />
                <Tag label={about.studies[1].where} />
            </div>  
          </span> base, i'm actually specialized on 
          
          <span className={styles.pop}>
            UX/UI Design
            <div className={styles.pop_box} style={{ top: y, left: x }}>
                <Tag label={about.studies[0].when} />
                <Tag label={about.studies[0].level+ " in " +about.studies[0].what} />
                <Tag label={about.studies[0].where} />

            </div> 
          </span> with Frontend 
          
          <span className={styles.pop}>skills
            <div className={styles.pop_box} style={{ top: y, left: x }}>
              {about.skills.map((data, i) => (
              <div key={i} style={{display: "inline-flex"}}>* <Tag label={data.skill} /></div>
              ))}
            </div>
          </span>

          </h2>

      </motion.div>

      <div className={styles.spotify_song}>
      My song of the moment:
      <Spotify wide link="https://open.spotify.com/track/4sv1npiIujQ20owmrMj8DM?si=57f3f63308e34795" />
      </div>

    </main>

  )
}

