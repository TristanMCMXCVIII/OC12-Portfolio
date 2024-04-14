import React, {useState, useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import logoTN from '../../assets/TN.svg';

import './Sidebar.scss';
import '../Header/Header.scss';

const Sidebar = ({ isOpen, closeSidebar }) => {

    const location = useLocation();
    const [activePath2, setActivePath2] = useState(location.pathname);

    // function to set each nav button a style according to current page
    function getNavLinkClass2(path) {
        return activePath2 === path ? 'nav-link--active' : 'nav-link--inactive';
    };

    // change the state activePath, when location change
    useEffect(() => {
        setActivePath2(location.pathname);
    }, [location]);

    return (
        <>
            {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <NavLink to="/">
                    <img className='header__logo' src={logoTN} alt='Logo TN'/>
                </NavLink>
                <nav className='sidebar__nav'>
                    <NavLink to="/" className={getNavLinkClass2('/')}>Accueil</NavLink>
                    <NavLink to="/projects" className={getNavLinkClass2('/projects')}>Projets</NavLink>
                    <NavLink to="/skills" className={getNavLinkClass2('/skills')}>Compétences</NavLink>
                    <NavLink to="/contact" className='button__primary'>Contacter</NavLink>
                </nav>
            </div>
        </> 
    );
};

export default Sidebar;
