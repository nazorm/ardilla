import React, { useState, useRef } from 'react';
import './styles.scss';
import { expectationsData } from '../../data';
import { Carousel } from 'antd';
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'
import facebook from '../../assets/icons/facebook.svg'
import { responsive } from '../../../../utils/constants';
import { ProgressBar } from '../../../../components/ProgressBar';
import forwardIcon from '../../assets/icons/forward-icon.svg'

export const Expectations = () => {
    const [activeSlide, setActiveSlide] = useState<number>(0)
    const ref = useRef<any>();
    
    const handleNext = () => {
        if (activeSlide === 8) {
            ref.current.goTo(0);
        } else {
            ref.current.goTo(activeSlide + 1);

        }
    }
    const getCurrentIndex = (currentSlide: number) => {
        setActiveSlide(currentSlide)
    }

    return (
        <>
            <section className='expectations-section'>
                <div className='expectations-container'>
                    <div className='section-title'>
                        <p className='expectations-title'>What you can expect</p>
                    </div>
                    <div className='forward-icon-container'>
                        <img src={forwardIcon} className='forward-icon' alt='forward' onClick={handleNext} />
                    </div>

                    <div className='expectations'>
                        <Carousel
                            autoplay
                            slidesToShow={4}
                            dots={false}
                            responsive={responsive}
                            afterChange={getCurrentIndex}
                            ref={ref}
                        >
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
                    <ProgressBar currentSlide={activeSlide + 1} noOfSlides={8} />
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