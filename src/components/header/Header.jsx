import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Smiley, List, X } from "phosphor-react";

import styles from './Header.module.scss';

const Header = () => {

  return (
    <header className={styles.Header} >

      <div className={styles.left}>
        <div className={styles.identity}>

          <Link to="/">
            <p style={{marginRight: ".5rem"}}>Silvia Stefani</p>
          </Link>
          <Smiley />
        </div>

      </div>


    </header>
  );
};

export default Header
