import React from 'react';
import './styles.scss';
import { Header } from '../components/Layout/Header'
import { CareersIntroduction } from './components/Introduction';
import { Culture } from './components/Culture';
import { HiringProcess } from './components/HiringProcess';
import { Footer } from '../components/Layout/Footer';

export const CareersPage = () => {
    return (
        <main className='careers-main'>
            <Header btnType={'secondary'} bgColor={'transparent'} />
            <CareersIntroduction />
            <Culture />
            <HiringProcess />
            <Footer />
        </main>
    )
};