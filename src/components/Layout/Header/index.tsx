import React from 'react';
import { TopNav } from '../TopNav';
import './styles.scss';
import logo from '../../../assets/icons/logo.svg';
import { Button } from '../../Button';
import mapIcon from '../../../assets/icons/map.svg';
import webIcon from '../../../assets/icons/web-icon.svg'

interface IHeaderProps {
    btnType: string;
    bgColor: string;
}


export const Header = (props: IHeaderProps) => {
    const { btnType, bgColor } = props;
    // TODO redirect ro account creation screen
    const handleCreateAccount = () => { }

    return (
        <header className='header' style={{backgroundColor: `${bgColor}`}}>
            <div className='navlogo-container'>
                <img src={logo} alt='logo' className='logo' />
                <TopNav />
            </div>

            <div className='cta-container'>
                <span className='header__cta'>Sign In</span>
                <Button text='Create Account' btnType={btnType} primaryAction={handleCreateAccount} />
                <img src={btnType==='secondary' ? webIcon : mapIcon} alt='map'  className='map-icon'/>
            </div>
        </header>
    )
}