import React from 'react';
import './styles.scss';
import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';
import { Introduction } from './components/Introduction';
import { Products } from './components/Products';
import { TransparentOpportunities } from './components/TransparentOpportunities';

export const HomePage = () => {
  return (
    <main className='main'>
      <Header btnType='primary' bgColor='#240053' />
      <Introduction />
      <Products />
      <TransparentOpportunities />
      <Footer />
    </main>
  )
};
