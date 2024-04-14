import React from 'react';

import './Feedback.scss';

const Feedback = ({feedback}) => {
    return (
        <div className='feedback'>
            <div className="feedback__header">
                <img src={`${process.env.PUBLIC_URL}${feedback.image}`} alt={`Profil de ${feedback.name}`} className='feedback__profil'/>
                <div className="feedback__metadata">
                    <p className="feedback__name" >{feedback.name}</p>
                    <p className="feedback__position" >{feedback.position}</p>
                </div>
            </div>
            <div className="feedback__body">
                <p>{feedback.comment}</p>
            </div>
        </div>
    )
}

export default Feedback;
