import React from 'react';
import styles from './Footer.module.scss';
import { InstagramLogo, LinkedinLogo, GithubLogo, EnvelopeSimple } from "phosphor-react";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
        <div className={styles.items}>
            <div className={styles.location}>
                <p>Based in Madrid, Spain</p>
            </div>
            <div className={styles.copyright}>
                <p>© 2022. Made by Silvia Stefani</p>
            </div>
            <div className={styles.contacts}>
                <a target="_blank" href="https://instagram.com/msstefanil/"><InstagramLogo /></a>
                <a target="_blank" href="https://www.linkedin.com/in/silvia-stefani-549947203/"><LinkedinLogo /></a>
                <a target="_blank" href="https://github.com/silvia-stefani/"><GithubLogo /></a>
                <a target="_blank" href="mailto:mariasilviastefani@gmail.com"><EnvelopeSimple /></a>
            </div>
        </div>
    </footer>
  )
}
