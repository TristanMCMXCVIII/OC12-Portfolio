import React from 'react';
import { useSelector } from 'react-redux';

import ProjectCard from '../../ProjectCard/ProjectCard.jsx';

import './ProjectsList.scss';

import { filtersProjectsSelector } from '../../../store/selectors.js';

const ProjectsList = ({projects}) => {

    const activeType = useSelector(filtersProjectsSelector);

    return (
        <div className='projects-list'>
            {activeType === 'Tous' ?
            projects.map((project, index) => 
                <ProjectCard key={project.id} project={project}/>
            )
            :
            projects.filter( project => project.type === activeType).map((project, index) => 
            <ProjectCard key={project.id} project={project}/>
        )
        
        }
        </div>
    )
}

export default ProjectsList;
