import React from 'react';
import './styles.scss';
import circle from '../../../../../assets/icons/circle.svg'



export const Divider = () => {
    return (
        <div className='divider-container'>
            <img src={circle} className='circle' alt='circle' />
            <div className='divider-bar'></div>
            <img src={circle} className='circle' alt='circle' />
        </div>
    )
}