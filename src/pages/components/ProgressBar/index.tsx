import React, { useState, useEffect } from 'react';
import './styles.scss';

interface IProgressBarProps {
    currentSlide: number;
    noOfSlides: number;
}

export const ProgressBar = (props: IProgressBarProps) => {
    const { currentSlide, noOfSlides } = props;
    const [barWidth, setBarWidth] = useState('0%')
    useEffect(() => {
        const progress = Math.floor(currentSlide / noOfSlides * 100);
        const newProgress = progress + '%';
        setBarWidth(newProgress)
    }, [currentSlide, noOfSlides])
    return (
        <div className='bar-container'>
            <div className='bar' style={{ width: `${barWidth}` }}></div>
        </div>
    )
};

export const ProgressStep = (props: IProgressBarProps) => {
    const { currentSlide, noOfSlides } = props;
    const arrayOfSteps = [...Array(noOfSlides)];
    return (
        <div className='progress-step-container'>
            {arrayOfSteps.map((_, index) => {
                const isStepCompleted = index + 1  <= currentSlide;
                return (
                    <div
                        key={index}
                        className={`progress-step ${isStepCompleted ? 'progress-step--completed' : ''}`}
                    ></div>
                );
            })}
        </div>
    )
};
