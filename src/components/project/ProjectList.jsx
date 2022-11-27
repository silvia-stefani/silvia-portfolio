import React, { useState, useEffect } from "react";

import styles from "./ProjectList.module.scss";
import colors from "/src/utils/colors"

import Tag from "../tag/Tag";

import { projects } from "../../models/curriculum/experience";

import pathToPublic from "/src/utils/img-routes";

import { motion } from "framer-motion";


export default function ProjectList({

    title,
    location,
    projectIntro,
    imgRoute

}) {

    const [modal, setModal] = useState("0vh")

    const [name, setName] = useState({
        zIndex: 0,
        color: colors.secondary,
        transform: "translateX(0)"
    })

    const { zIndex, color, transform } = name

    function onMouseIn() {

        setName({
            zIndex: 50,
            color: colors.primary,
            transform: "translateX(15%)"
        })
        setModal("40vh")

    }
    function onMouseOut() {

        setName({
            zIndex: 0,
            color: colors.secondary,
            transform: "translateX(0)"
        })
        setModal("0vh")
    }


    return (

        <motion.div className={styles.project}


            onMouseEnter={onMouseIn}
            onMouseLeave={onMouseOut}

            initial={{ pointerEvents: "none" }}
            animate={{ pointerEvents: "auto" }}
            transition={{ delay: 2 }}>

            <div className={styles.title}>
                <h3 className={styles.name} style={{ zIndex: zIndex, color: color, transition: "all 320ms ease-in" }}>
                    {title}</h3>
                {location}
            </div>

            <div className={styles.images_container} style={{ height: modal, transition: "height 320ms ease-in", transitionDelay: "display 1s" }}>
                <div className={styles.description}>
                    <p>{projectIntro}</p>
                    <div className={styles.tags}>
                    {projects.map((data) => (
                        title == data.title ? data.tags.map((data, i) => ( <Tag key={i} label={data.tag} /> )) : null ))}
                    </div>
                </div>
                <div className={styles.image}>
                    <img src={pathToPublic + imgRoute} alt="" />
                </div>
            </div>

        </motion.div>


    )
}
