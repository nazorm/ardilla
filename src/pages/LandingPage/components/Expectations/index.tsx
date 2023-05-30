import React from 'react';
import './styles.scss';
import { expectationsData } from '../../data';
import { Carousel } from 'antd';
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'
import facebook from '../../assets/icons/facebook.svg'


export const Expectations = () => {
    const responsive = [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    return (
        <>
            <section className='expectations-section'>
                <div className='expectations-container'>
                    <div className='section-title'>
                        <p className='expectations-title'>What you can expect</p>
                    </div>
                    <div className='expectations'>
                        <Carousel autoplay slidesToShow={4} dots={false} responsive={responsive} >
                            {expectationsData.map((data) => {
                                return (
                                    <div className='expectation' key={data.id}>
                                        <img src={data.expectationImg} className='expectation__image' alt='expectation' />
                                        <p className='expectation__name' style={{ color: `${data.color}` }}> {data.expectation}</p>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className='landing-footer'>
                <p className='copyright'>© 2023 Ardilla. All right reserved</p>
                <div className='landing-socials'>
                    <a href='https://www.instagram.com/' rel='noopener noreferrer' target='_blank' className='landing-social'><img src={instagram} alt='instagram' className='landing-social-icon' /></a>
                    <a href='https://www.facebook.com/' rel='noopener noreferrer' target='_blank' className='landing-social'><img src={facebook} alt='instagram' className='landing-social-icon' /></a>
                    <a href='https://www.twitter.com/' rel='noopener noreferrer' target='_blank' className='landing-social'><img src={twitter} alt='instagram' className='landing-social-icon' /></a>
                </div>
            </section>
        </>

    )
}