import React from 'react';
import './styles.scss';
import { Header } from '../../components/Layout/Header';
import { Calculator } from './components/Calculator';
import { Footer } from '../../components/Layout/Footer';


export const InterestCalculator = () => {
    return (
        <main className=''>
            <Header btnType='secondary' bgColor='black' />
            <Calculator />
            <Footer />
        </main>
    )
}