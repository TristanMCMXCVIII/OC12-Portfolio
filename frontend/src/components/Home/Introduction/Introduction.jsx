import React from 'react';
import { NavLink } from 'react-router-dom'

import logoTN from '../../../assets/TN.svg';
import './Introduction.scss';

const Introduction = () => {
    return (
        <div className='introduction'>
            <img className='introduction__logo' src={logoTN} alt='Logo TN'/>
            <h1>Tristan NOCENT</h1>
            <p className='introduction__sub-title'>INTÉGRATEUR WEB</p>
            <p className='introduction__description'>Portfolio conclusion de mon alternance intégrateur web React avec OpenClassrooms</p>
            <NavLink to="/contact" className='button__primary'>                  
                        Contacter
            </NavLink>
        </div>
    )
}

export default Introduction;
