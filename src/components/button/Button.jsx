import React from "react";
import styles from './Button.module.scss';

import colors from "../../utils/colors";

export default function Button({
    onPress,
    type,
    margin,
    label, hide
  }) {

    const btnType = type === "primary" ? styles.primary : "secondary"
    
    return (
        <button className={
          
          styles.Button + " " +
          btnType
      
        }
        style={margin ? {marginRight: ".5rem"} : null & hide ? {display: "none"} : {display: "block"}}
        onClick={onPress}
        >
          
        {label}

        </button>
    )
  }
