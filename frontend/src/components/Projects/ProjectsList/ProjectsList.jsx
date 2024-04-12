import React from 'react';
import ProjectCard from '../../ProjectCard/ProjectCard.jsx';

import './ProjectsList.scss';

const ProjectsList = ({projects}) => {
    return (
        <div className='projects-list'>
            {projects.map((project, index) => 
                <ProjectCard key={project.id} project={project}/>
            )}
        </div>
    )
}

export default ProjectsList;
