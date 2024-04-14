import React from 'react';

import './Skills.scss';

import SkillItem from '../../components/SkillItem/SkillItem';

const Skills = ({skills}) => {

    return (
        <div className="skills">
            

            <section className="skills__container">
                <h2>COMPÉTENCES</h2>

                <div className="skills__grid">
                    {skills.map((skill, index) => (
                        <SkillItem key={`skill-item-${index}`} skill={skill}/>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Skills;
