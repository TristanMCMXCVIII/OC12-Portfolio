import React from 'react';
import { Link } from 'react-router-dom'

import './ProjectCard.scss';

import Tag from '../Tag/Tag.jsx';

const ProjectCard = ({project}) => {
    return (
        <Link to={`/project/${project.id}`} className='project-card'>
      
                <img src={project.logo} alt={`logo projet ${project.number}`} className='project-card__logo'/>
                <img src={project.thumbnail} alt={`thumbnail projet ${project.number}`} className='project-card__thumbnail'/>
                <p className='project-card__date'>{project.start_date}</p>
                <p className='project-card__description'>{project.description}</p>
                <div className="project-card__tags">
                    {project.skills.map((skill, index) => 
                        <Tag key={`tag-${skill.title}`} tagName={skill.title}/>
                    )}
                </div>
                <div className="project-card__actions">
                    <div className="project-card__details">
                        <p>Détails</p>
                    </div>
                    {project.github && 
                        <div className="project-card__online">
                            Site en ligne
                        </div>
                    }
                </div>
        </Link>
    )
}

export default ProjectCard;
