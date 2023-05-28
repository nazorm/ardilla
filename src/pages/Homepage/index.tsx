import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <main>
            <h1 className='heading'> Home page</h1>
            <Link to={"/landing-page"}>
                Go to landing
            </Link>
        </main>
    )
};
