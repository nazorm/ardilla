import React from 'react';
import './styles.scss';
import landingoverlay from '../../assets/landing-overlay.png'
import logo from '../../../../assets/icons/logo.svg';
import hamburger from '../../assets/icons/hamburger.svg'
import spotlight from '../../assets/icons/spotlight.svg'
export const Introduction = () => {
    return (
        <section className='landing-introduction'>
            <header className='landing-header'>
                <img src={logo} alt='logo' className='landing-logo' />
                <p className='feature'>• Features</p>
                <img src={hamburger} className='hamburger' alt='hamburger' />
            </header>

            <div className='landing-intro-text-container'>
                <h1 className='landing-introduction__heading'>
                    Your  portal <br /> to more
                </h1>
                <p className='landing-introduction__text'>Wealth building is possible. You just need the right partner. With better financial tools, Ardilla has made it so much easier for you to start building wealth. Take advantage of the Ardilla platform by signing up with your email address..</p>
                {/* <Button btnType='secondary' text='Get Started' primaryAction={handleGetStarted} /> */}
                <img src={spotlight} className='spotlight-image' alt='spotlight' />
            </div>
            <div className='overlay'>
                <img src={landingoverlay} className='overlay-image' alt='overlay' />
            </div>

        </section>
    )
}