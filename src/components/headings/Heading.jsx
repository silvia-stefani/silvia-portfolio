import React from "react";
import styles from './Heading.module.scss';

export default function Heading({label}) {
    return (

        <div className={styles.label}>
            <h3 className={styles.title}>{label}</h3>
        </div>
    )
  }
