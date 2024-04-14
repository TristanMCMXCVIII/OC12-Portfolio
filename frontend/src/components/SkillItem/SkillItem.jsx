import React from 'react';

import './SkillItem.scss';

import starImg from '../../assets/star.svg';

const SkillItem = ({skill}) => {
    return (
        <div className='skill-item'>
            <div className="skill-item__infos">
                <p className="skill-item__title">{skill.title}</p>
                <img src={skill.image} alt={`skill item of ${skill.title}`} className="skill-item__image"/>
                <p className="skill-item__description">{skill.description}</p>
            </div>
            <div className="skill-item__level">
                <p>{skill.level}</p>
                <div className="skill-item__level__start-container">
                    {Array.from({ length: skill.stars }, (_, index) => <img key={`star-${index}`} src={starImg} alt={`start-${index}`}/>)}
                </div>
            </div>
        </div>
    )
}

export default SkillItem;
