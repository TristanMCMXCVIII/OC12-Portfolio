import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Projects.scss';

import ProjectsList from '../../components/Projects/ProjectsList/ProjectsList.jsx';
import { filtersProjectsSelector } from '../../store/selectors.js';
import { setFilterProjects } from '../../store/filtersSlice.js';

const Projects = ({projects}) => {

    const types = projects.reduce( (acc, project) => {
        if (!acc.includes(project.type)){
            acc.push(project.type)
        };
        return acc;
    }, [])

    types.unshift('Tous');

    // active filter from state
    const activeType = useSelector(filtersProjectsSelector);
    const dispatch = useDispatch();

    const handleTypeClick = (type) => {
        dispatch(setFilterProjects(type)); // Déclenche l'action pour mettre à jour le type actif dans le state Redux
    }

    return (
        <div className='projects'>
            <h2>PROJETS</h2>
            <section className='projects__nav'>
                <div className="projects__nav__container">
                    <h3>FILTRES</h3>
                    <div className="projects__nav__filter">
                        <p>Type de projets</p>
                        {types.map((type, index) => (
                            <div className={`project__nav__type ${activeType === type && 'typeActivated'}`} key={`type-${index}`} onClick={() => handleTypeClick(type)} >{type}</div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='projects__container'>
                <ProjectsList projects={projects} />
            </section>
        </div>
    )
}

export default Projects;
