import React from 'react';
import './styles.scss';
import { hiringData } from './data';
import applicant1 from "./assets/applicant1.svg";
import applicant2 from "./assets/applicant2.svg";
import applicant3 from "./assets/applicant3.svg";

export const HiringProcess = () => {
    return (
        <>
            <section className='hiring-section'>
                <div className='hiring-container'>
                    <h2 className='hiring-section-heading'>How We Hire</h2>
                    <div className='stages'>
                        {hiringData.map((data) => {
                            return (
                                <div className='stage' key={data.stageTitle}>
                                    <img src={data.stageImage} alt='stage' className='stage-image' />
                                    <h4 className='stage-title'> {data.stageTitle}</h4>
                                    <p className='stage-info'>{data.stageInfo}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className='applicant-section'>
                <div className='applicant-container'>
                    <img src={applicant1} alt='applicant' className='applicant-image' />
                    <img src={applicant2} alt='applicant' className='applicant-image' />
                    <img src={applicant3} alt='applicant' className='applicant-image' />
                </div>
            </section>
        </>

    )
}