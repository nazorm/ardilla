import React from 'react';
import './styles.scss';
import { Introduction } from './components/Introduction';
import { Expectations } from './components/Expectations';


export const LandingPage = () => {
    return (
        <main className='landing-main'>
            <Introduction />
            <Expectations/>
        </main>
    )
};
