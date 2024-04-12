import React from 'react';

import './SkillsTab.scss';

const SkillsTab = ({skills}) => {
    return (
        <div className='skills-tab'>
            {skills.map((skill, index) => (
                <div key={`skillsTab-${index}`} className="skill__container">
                    <p>{skill.title}</p>
                    <img src={skill.image} alt={skill.title}/>
                    <p>{skill.description}</p>
                </div>
            ))}
        </div>
    )
}

export default SkillsTab;
