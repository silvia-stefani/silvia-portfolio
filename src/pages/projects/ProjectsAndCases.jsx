import React, { useState } from "react";
import styles from "./ProjectsAndCases.module.scss";

import Button from "/src/components/button/Button";
import ProjectList from "/src/components/project/ProjectList";

import { projects } from "/src/models/curriculum/experience";

import { motion } from "framer-motion";

import { Link } from 'react-router-dom';


export default function ProjectsCases(onPress) {

    return (

        <main className={styles.ProjectsCases}>

            <div className={styles.projects_left}>

                <div className={styles.interactive}>

                    {projects.map((data, i) => (

                        !data.hideProject && data.type == "interactive" ?

                            <motion.div

                                key={i}
                                initial={{ height: "100vh" }}
                                animate={{ height: "fit-content" }}
                                transition={{ duration: 1, type: 'spring', delay: i * 0.1, ease: "easeIn" }}>

                                <Link to={`/` + data.slug}>
                                    <ProjectList
                                        key={i}
                                        title={data.title}
                                        location={data.location}
                                        imgRoute={data.imageCover}
                                        projectIntro={data.projectIntro}
                                        tag={data.tags.map((data) => (data.tag))}
                                    />
                                </Link>

                            </motion.div>

                            : null

                    ))}

                </div>
            
            </div>

            <div className={styles.projects_right}>

                <div className={styles.graphic}>

                    {projects.map((data, i) => (

                        !data.hideProject && data.type == "graphic" ?

                            <motion.div

                                key={i}
                                initial={{ height: "100vh" }}
                                animate={{ height: "fit-content" }}
                                transition={{ duration: 1, type: 'spring', delay: i * 0.1, ease: "easeIn" }}>

                                <Link to={`/` + data.slug}>

                                    <ProjectList

                                        key={i}
                                        title={data.title}
                                        location={data.location}
                                        imgRoute={data.imageCover}
                                        projectIntro={data.projectIntro}
                                        tag={data.tags.map((data) => (data.tag))}

                                    />

                                </Link>

                            </motion.div>

                            : null

                    ))}

                </div>

            </div>

        </main>


    )
}

