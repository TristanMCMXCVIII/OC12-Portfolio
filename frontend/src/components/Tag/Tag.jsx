import React from 'react';

import './Tag.scss';

const tag = ({tagName}) => {
    return (
        <div className='tag'>
            <p className='tag__name'>{tagName}</p>
        </div>
    )
}

export default tag;
