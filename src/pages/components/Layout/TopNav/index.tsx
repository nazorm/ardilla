import React from 'react';
import './styles.scss';
import { Menu, Dropdown } from 'antd';
import dropdownCaret from '../../../../assets/icons/dropdown-caret.svg';

export const TopNav = () => {
    const items = [
        {
            label: <a target="_blank" rel="noopener noreferrer" href="/">Save</a>,
            key: '1'
        },
        {
            label: <a target="_blank" rel="noopener noreferrer" href="/">Invest <span style={{color: 'grey'}}>(coming soon)</span> </a>,
            key: '2'
        },
        {
            label: <a target="_blank" rel="noopener noreferrer" href="/">Learn</a>,
            key: '3'
        },
        {
            label: <a target="_blank" rel="noopener noreferrer" href="/">Budget <span style={{color: 'grey'}}>(coming soon)</span> </a>,
            key: '4'
        },
        {
            label: <a target="_blank" rel="noopener noreferrer" href="/">Insurance<span style={{color: 'grey'}}>(coming soon)</span> </a>,
            key: '5'
        },

    ]
    return (
        <nav className='top-nav'>
            <ul className='top-nav__list'>
                <li className='top-nav__item'>
                    <Dropdown menu={{ items }}>
                        <a href='/' className="top-nav__item">
                            Products
                            <img src={dropdownCaret} alt='dropdown-caret' className='dropdown-caret' />
                        </a>
                    </Dropdown>
                </li>
                <li className='top-nav__item'>
                    <a href='/' className="top-nav__item">
                        Business <span className='beta'>Beta</span>
                    </a>
                </li>
                <li className='top-nav__item'>
                    <Dropdown menu={{ items }}>
                        <a href='/' className="top-nav__item">
                            Comapny
                            <img src={dropdownCaret} alt='dropdown-caret' className='dropdown-caret' />
                        </a>
                    </Dropdown>
                </li>
                <li className='top-nav__item'>
                    <a href='/' className="top-nav__item">
                        Learn
                    </a>
                </li>
            </ul>

        </nav>
    )
}