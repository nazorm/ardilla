import React from 'react';
import './styles.scss';
import { Button } from '../../../components/Button';
import demo from '../../../../assets/demo.png';




export const Introduction = () => {

    //TODO Call handle get started
    const handleGetStarted = () => { }

    return (
        <div className='introduction'>
            <h1 className='introduction__heading'>
                Your Access To More
            </h1>
            <div className='intro-text-container'>
            <p className='introduction__text'>Ardilla helps you save and invest in achieving your financial goals, we have the most flexible and seamless way to grow your funds.</p>
            <Button btnType='secondary' text='Get Started' primaryAction={handleGetStarted} />
            </div>
            <img src={demo} className='demo-image' alt='demo' />
        </div>
    )
}