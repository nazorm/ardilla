import React from 'react';
import './styles.scss';
import footerPhone from '../../../assets/footer-phone.png'
import { FooterLinks } from './footerlinks';
import { Link } from 'react-router-dom';
import instagram from '../../../assets/icons/instagram.svg'
import facebook from '../../../assets/icons/facebook.svg'
import linkedin from '../../../assets/icons/linkedin.svg'
import twitter from '../../../assets/icons/twitter.svg'

export const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-preview'>
                <div className='preview-info'>
                    <h3 className='download-text'>Download for free
                        Start saving Today</h3>
                    <button className='footer-btn'>Download for free</button>
                </div>
                <img src={footerPhone} className='footer-image' alt='phone' />
            </div>
            <div className='footer'>
                {FooterLinks.map((data) => {
                    return (
                        <div key={data.name} className='footer__resource'>
                            <h5 className='footer__name'>{data.name}</h5>
                            <ul className='footer__list'>
                                {data.links.map((link) => {
                                    return (
                                        <li key={link.name} className='footer__item'><Link to={link.path} className='footer__link'>{link.name}{' '}{!link.available && <span className='footer__availability'>comming soon</span>} </Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
                <div className='footer__resource'>
                    <div>
                        <h5 className='footer__name'>Address</h5>
                        <ul className='footer__list'>
                            <li className='footer__item'><Link to='/' className='footer__link'>33B, Ogundana street, Allen, Ikeja.</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='footer__name'>Contact</h5>
                        <ul className='footer__list'>
                            <li className='footer__item'><a href='mailto:support@ardilla.africa' rel='noopener noreferrer' target='_blank' className='footer__link'>support@ardilla.africa</a></li>
                            <li className='footer__item'><a href='tel:(234)801 000 1234' target='_blank' rel='noopener noreferrer' className='footer__link'>(234)801 000 1234</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='license-container'>
                <div className='socials-container'>
                    <p className='copyright'>© 2023 Ardilla. All right reserved</p>
                    <div className='socials'>
                        <a href='https://www.instagram.com/' rel='noopener noreferrer' target='_blank' className='social'><img src={instagram} alt='instagram' /></a>
                        <a href='https://www.facebook.com/' rel='noopener noreferrer' target='_blank' className='social'><img src={facebook} alt='instagram' /></a>
                        <a href='https://www.linkedin.com/' rel='noopener noreferrer' target='_blank' className='social'><img src={linkedin} alt='instagram' /></a>
                        <a href='https://www.twitter.com/' rel='noopener noreferrer' target='_blank' className='social'><img src={twitter} alt='instagram' /></a>
                    </div>
                </div>
                <p className='liscense'>Ardilla operates under the coorperative license of Ardilla Multipurpose Cooperative Society, LSC 18245, We provide Savings and Fixed deposit services to our users</p>
            </div>
        </footer>
    )
}