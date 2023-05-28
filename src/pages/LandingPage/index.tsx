import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <main>
            <h1 className='heading'> Landing page</h1>
            <Link to={'/'}>
                Go to Home page
            </Link>
        </main>
    )
};
