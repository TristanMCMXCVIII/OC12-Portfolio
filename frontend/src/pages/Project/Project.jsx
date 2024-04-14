import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

import BulletList from '../../components/BulletList/BulletList.jsx';
import SkillsTab from '../../components/SkillsTab/SkillsTab.jsx';


import './Project.scss';
import Carousel from '../../components/Carousel/Carousel.jsx';

const Project = ({projects}) => {
 
    const { projectId } = useParams();

    const project = projects.find( proj => proj.id === projectId );

    if(!project) {
        return <Navigate to='/404' />;
    }

    return (
        <div className='project'>
            <h2>DETAILS DU PROJET</h2>
            <section className='project__header'>
                <img src={project.logo} alt='Logo du projet' className='project__logo'/>
                <div className="project__metadata">
                    <p className="project__metadata-txt">Type de projet : {project.type}</p>
                    <p className="project__metadata-txt">Démaré en : {project.start_date}</p>
                    <p className="project__metadata-mentor">Mentor : {project.mentor}</p>
                    <p className="project__metadata-number">N° du projet : {project.number}</p>
                </div>
            </section>
            <section className='project__carousel'>
                <Carousel> 
                    {project.images.map((image, index) => (
                        <div>
                            <img src={image} alt={`carousselImage-${index}`} className='project__image' key={`project${project.number}-image${index}`}/>
                        </div>
                        
                    ))}
                </Carousel>
            </section>
            <section className='project__main'>
                <div className="project__bloc">
                    <h3>MA MISSION</h3>
                    <BulletList bullets={project.missions} />
                </div>
                <div className="project__bloc">
                    <h3>CE QUE J'AI APPRIS</h3>
                    <BulletList bullets={project.learn} />
                </div>
            </section>
            <section className='project__main'>
                <div className="project__bloc">
                    <h3>COMPETENCES</h3>
                    <SkillsTab skills={project.skills}/>
                </div>
            </section>
            {
                project.github && (
                    <section className='project__main'>
                        <div className="project__bloc">
                            <h3>LIENS</h3>
                        </div>
                    </section>
                )
            }
        </div>
    )
}

export default Project;
