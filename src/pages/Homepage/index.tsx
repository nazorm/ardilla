import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { Header } from '../components/Layout/Header';
import { Introduction } from './components/Introduction';

export const HomePage = () => {
  return (
    <main>
      <Header btnType='primary' bgColor='#240053' />
      <Introduction />
    </main>
  )
};
