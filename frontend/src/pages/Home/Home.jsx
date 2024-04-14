import React from 'react';
import { Link } from 'react-router-dom';

import Introduction from '../../components/Home/Introduction/Introduction.jsx';
import Conveyor from '../../components/Home/Conveyor/Conveyor.jsx';
import Feedback from '../../components/Feedback/Feedback.jsx';
import ProjectsList from '../../components/Projects/ProjectsList/ProjectsList.jsx';


import './Home.scss';
import '../../styles/buttons.scss';

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
                <h2>ENTREPRISES QUI M'ONT FAIT CONFIANCE</h2>
                <Conveyor />
            </section>
            <section className='home__container--column'>
                <h2>QUI SUIS-JE</h2>
                <p className='home__speech'>Diplomé d'une école d'ingénieur en 2021, INSA Lyon, je suis passionné par les nouvelles technologies, et en particulier l'informatique et ses sous domaines : site web, jeux, télécommunication, IA... Je suis aussi un ancien élève de l'ESSEC, école de commerce que j'ai intégré à travers le programme Grande Ecole. Mais officiellement, je n'y ai étudié, à ce jours, que 10j car j'ai rejoins un ami d'enfance, entrepreneur, avec lequel nous avons aujourd'hui une agence de développement et un incubateur pour projets informatiques, entre autres !</p>
            </section>
            <section className='home__container--column'>
                <h2>COMPETENCES</h2>
                <img src={imageSkills} alt="dashboard of my skills" className='home__skills-img'/>
                    <Link to="/competences" className='button__primary--lg'>                  
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
                <Link to="/projects" className='button__primary--lg'>                  
                        Voir plus
                </Link>
            </section>
        </div>
    );
};

export default Home;
