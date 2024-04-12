import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../components/Header/Header.jsx';
import Home from '../pages/Home/Home.jsx';
import Projects from '../pages/Projects/Projects.jsx';
import Project from '../pages/Project/Project.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Error from '../pages/Error/Error.jsx';
import Contact from '../pages/Contact/Contact.jsx';

import './App.scss';

import projectsData from '../data/projects.json';
import feedbacksData from '../data/feedbacks.json';
import skillsData from '../data/skills.json';
import Skills from '../pages/Skills/Skills.jsx';

function App() {

    const [projects, setProjects] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [skills, setSkills] = useState([]);
    
    useEffect( () => {
        setProjects(projectsData)
        setFeedbacks(feedbacksData)
        setSkills(skillsData)
    }, [])


    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home projects={projects} feedbacks={feedbacks} />}/>
                <Route path="/projects" element={<Projects projects={projects}/>}/>
                <Route path="/project/:projectId" element={<Project projects={projects}/>}/>
                <Route path="/skills" element={<Skills skills={skills} />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/*" element={<Error/>}/>
            </Routes>  
            <Footer/>
        </Router>
    );
}

export default App;
