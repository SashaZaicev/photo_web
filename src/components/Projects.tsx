import React from 'react';
import s from "./Projects.module.css"
import Project from "./Project";

const Projects = () => {
    return (
        <div className={s.wrapperProject}>
            <div className={s.titleContainer}>
                <div className={s.line}><hr/></div>
                <div className={s.title}>projects</div>
            </div>
            <Project/>
        </div>
    );
};

export default Projects;