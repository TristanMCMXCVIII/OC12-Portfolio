import React from 'react';

import './BulletList.scss';

const BulletList = ({bullets}) => {
    return (
        <div className='bullet-list'>
            {bullets.map( (bullet, index) => (<p key={`bullet-index${index}-bullet${bullet}`}>• {bullet}</p>))}
        </div>
    );
};

export default BulletList;
