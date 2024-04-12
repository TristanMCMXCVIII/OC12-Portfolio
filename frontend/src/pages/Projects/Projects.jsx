import React from 'react';

import './Projects.scss';

import ProjectsList from '../../components/Projects/ProjectsList/ProjectsList.jsx';

const Projects = ({projects}) => {
    return (
        <div className='projects'>
            <h2>PROJETS</h2>
            <section className='projects__container'>
                <ProjectsList projects={projects} />
            </section>
        </div>
    )
}

export default Projects;
