import React, { useState } from "react";
import styles from "./SinglePage.module.scss";

import Button from "/src/components/button/Button";
import ProjectList from "/src/components/project/ProjectList";

import { projects } from "/src/models/curriculum/experience";
import pathToPublic from "/src/utils/img-routes";

import { UserCircle } from "phosphor-react"
import { motion } from "framer-motion";


export default function SinglePage({ slug }) {

    return (

        projects.map((data, i) => (

            slug == data.slug ?

                <motion.main key={i} className={styles.singlePage}
                initial={{ translateY: "100%" }}
                animate={{ translateY: "0%" }}
                transition={{ duration: .4, type: "spring", delay: 0.3, ease: "easeIn" }} >

                    <h3 className={styles.title}>{data.title}</h3>

                    {data.collaboration == '' ? null :

                        <div className={styles.collaboration_row}>

                            {data.collaboration.map((colab, i) => (

                                <div key={i} className={styles.collaboration}>
                                    <a target="_blank" href={colab.link}><p>{colab.name}</p></a>
                                </div>
                            ))}

                        </div>
                    }

                    <p className={styles.description}>{data.fullDescription}</p>

                    {data.images.map((img, i) =>
                        <img className={styles.image} key={i} src={pathToPublic + img.image} alt={img.alt} />
                    )}

                </motion.main>

                : null

        ))

    )
}

