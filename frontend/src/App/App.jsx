import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setSkillsData } from '../store/skillsDataSlice.js';

import Header from '../components/Header/Header.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Home from '../pages/Home/Home.jsx';
import Projects from '../pages/Projects/Projects.jsx';
import Project from '../pages/Project/Project.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Error from '../pages/Error/Error.jsx';
import Contact from '../pages/Contact/Contact.jsx';
import ScrollToTop from '../utils/ScrollToTop/ScrollToTop.jsx';
import Skills from '../pages/Skills/Skills.jsx';

import './App.scss';

import projectsData from '../data/projects.json';
import feedbacksData from '../data/feedbacks.json';
import skillsData from '../data/skills.json';
import { setProjectsData } from '../store/projectsDataSlice.js';
import { setFeedbacksData } from '../store/feedbacksDataSlice.js';


function App() {

    // OPTION 1 : Import data from json
    const [projects, setProjects] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [skills, setSkills] = useState([]);
    
    useEffect( () => {
        setProjects(projectsData);
        setSkills(skillsData);
        setFeedbacks(feedbacksData);
    }, [])

    // OPTION 2 : Dispatch data for Redux

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProjectsData(projectsData));
        dispatch(setSkillsData(skillsData));
        dispatch(setFeedbacksData(feedbacksData));
    }, [dispatch]);

    // Display sideBar 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    // --- COMPONENT ---
    return (
        <Router>
            <ScrollToTop closeSidebar={closeSidebar}/>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
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
