import React from 'react';
import { Link } from 'react-router-dom';

import './Error.scss';

const Error = () => {
    return (
        <div className='error' >

            <div className='error__description' >
                <p className='error__main'>ERROR 404</p>
                <p className='error__sub'>La page que vous recherchez n'existe pas</p>
            </div>
            <Link to="/projects" className='button__primary'>                  
                Accueil
            </Link>

        </div>
    )
}

export default Error;
