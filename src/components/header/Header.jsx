import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Smiley, List, X } from "phosphor-react";

import styles from './Header.module.scss';

const Header = () => {

  return (
    <header className={styles.Header} >

      <nav className={styles.navbar}>
        <ul className={styles.menu}>
          <Link to="/"><li className={styles.menu_item}>Silvia Stefani<Smiley /></li></Link>
        </ul>
      </nav>

    </header>
  );
};

export default Header
