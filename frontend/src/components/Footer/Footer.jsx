import React from 'react';

import './Footer.scss';

import TNw from '../../assets/TNw.svg';

const Footer = () => {
    return (
        <footer>
            <section className='footer__container'>
                <img src={TNw} alt='logo TN white' className='footer__img'/>
                <div>
                    <p className='footer__txt'>Tristan NOCENT</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
