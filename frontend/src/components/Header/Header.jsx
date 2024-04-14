import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation} from 'react-router-dom'

import './Header.scss';
import '../../styles/buttons.scss';

import navigationImg from '../../assets/navigation.svg';

import logoTN from '../../assets/TN.svg';


const Header = ({ toggleSidebar }) => {

    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    // function to set each nav button a style according to current page
    function getNavLinkClass(path) {
        return activePath === path ? 'nav-link--active' : 'nav-link--inactive';
    };

    // change the state activePath, when location change
    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

     // component Header
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__nav-sm"></div>
                <NavLink to="/">
                    <img className='header__logo' src={logoTN} alt='Logo TN'/>
                </NavLink>
                <nav className='header__nav'>
                    <NavLink to="/" className={getNavLinkClass('/')}>Accueil</NavLink>
                    <NavLink to="/projects" className={getNavLinkClass('/projects')}>Projets</NavLink>
                    <NavLink to="/skills" className={getNavLinkClass('/skills')}>Compétences</NavLink>
                    <NavLink to="/contact" className='button__primary'>Contacter</NavLink>
                </nav>
                <div className="header__nav-sm" onClick={toggleSidebar}>
                    <img src={navigationImg} alt="navigation-logo-sm" />
                </div>
            </div>
        </header>
    );
};

export default Header
