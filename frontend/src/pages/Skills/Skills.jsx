import React from 'react';

import './Skills.scss';

const Skills = ({skills}) => {

    return (
        <div className="skills">
            

            <section className="skills__container">
                <h2>COMPÉTENCES</h2>

                <div className="skills__grid">
                    {skills.map((skill, index) => (
                        <div key={`skill-element-${index}`} className="skills_element">
                            {skill.title}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Skills;
