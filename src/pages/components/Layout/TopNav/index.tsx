import React from 'react';
import './styles.scss';
import { Menu, Dropdown } from 'antd';
import dropdownCaret from '../../../../assets/icons/dropdown-caret.svg';

export const TopNav = () => {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a target="_blank" rel="noopener noreferrer" href="/">Save</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a target="_blank" rel="noopener noreferrer" href="/">Invest</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <a target="_blank" rel="noopener noreferrer" href="/">Learn</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a target="_blank" rel="noopener noreferrer" href="/">Budget</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a target="_blank" rel="noopener noreferrer" href="/">Insurance</a>
            </Menu.Item>
        </Menu>
    );
    return (
        <nav className='top-nav'>
            <ul className='top-nav__list'>
                <li className='top-nav__item'>
                    <Dropdown overlay={menu}>
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
                    <Dropdown overlay={menu}>
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