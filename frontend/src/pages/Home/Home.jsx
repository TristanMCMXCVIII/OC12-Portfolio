import React from 'react';
import { Link } from 'react-router-dom';

import Introduction from '../../components/Home/Introduction/Introduction.jsx';
import Conveyor from '../../components/Home/Conveyor/Conveyor.jsx';
import Feedback from '../../components/Feedback/Feedback.jsx';
import ProjectsList from '../../components/Projects/ProjectsList/ProjectsList.jsx';


import './Home.scss';
import animojiLion from '../../assets/lion.webp';
import imageSkills from '../../assets/skills.svg';

const Home = ({projects, feedbacks}) => {
    return ( 
        <div className='home'>
            <section className='home__container--row'>
                <Introduction />
                <img className='home__profil' src={animojiLion} alt='animoji lion'/>
            </section>
            <section className='home__wide--column'>
                <h2>ENTREPRISES QUI M'ON FAIT CONFIANCE</h2>
                <Conveyor />
            </section>
            <section className='home__container--column'>
                <h2>COMPETENCES</h2>
                <img src={imageSkills} alt="dashboard of my skills" className='home__skills-img'/>
                    <Link to="/competences" className='button__primary'>                  
                        Voir plus
                    </Link>
            </section>
            <section className='home__container--column'>
                <h2>RECOMMANDATIONS</h2>
                <div className="home__feedback__container">
                    {feedbacks.map((feedback, index) => (
                        <Feedback key={`feedback-${index}`} feedback={feedback} />
                    ))}
                </div>
            </section>

            <section className='home__container--column'>
                <h2>PROJETS</h2>
                <section className='home__projets'>
                    <ProjectsList projects={projects.slice(0, 3)} />
                </section>
                <Link to="/projects" className='button__primary'>                  
                        Voir plus
                </Link>
            </section>
        </div>
    );
};

export default Home;
