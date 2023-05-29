import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { Header } from '../components/Layout/Header';
import { Introduction } from './components/Introduction';
import { Products } from './components/Products';
import { TransparentOpportunities } from './components/TransparentOpportunities';

export const HomePage = () => {
  return (
    <main className='main'>
      <Header btnType='primary' bgColor='#240053' />
      <Introduction />
      <Products/>
      <TransparentOpportunities/>
    </main>
  )
};
