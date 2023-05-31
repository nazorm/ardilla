import React, { useState, useRef } from 'react';
import './styles.scss';
import cultureImage1 from './assets/person1.svg'
import cultureImage2 from './assets/person2.svg'
import cultureImage3 from './assets/person3.svg'
import cultureImage4 from './assets/person4.svg'
import peopleMatterImage from './assets/people-matter.svg';
import { ardillaValues, peopleMatterData, perksData, positionData } from './data';
import playIcon from '../../../../assets/icons/play-icon.svg';
import { Carousel } from 'antd';
import { ProgressStep } from '../../../../components/ProgressBar';
import forwardArrow from './assets/forward-arrow.svg';
import backwardArrow from './assets/backward-arrow.svg';

export const Culture = () => {
    const [activeSlide, setActiveSlide] = useState<number>(0)
    const ref = useRef<any>();

    const handleNext = () => {
        if (activeSlide === 3) {
            ref.current.goTo(0);
        } else {
            ref.current.goTo(activeSlide + 1);

        }
    }
    const handlePrev = () => {
        if (activeSlide === 0) {
            ref.current.goTo(3);
        } else {
            ref.current.goTo(activeSlide - 1);

        }
    }
    const getCurrentIndex = (currentSlide: number) => {
        setActiveSlide(currentSlide)
    }
    const responsive = [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

    return (
        <>
            <section className='culture'>
                <div className='culture__heading-container'>
                    <p className='culture__heading'>
                        The Ardilla Culture
                    </p>
                </div>
                <div className='people'>
                    <div className='person'>
                        <img src={cultureImage1} className='person__image' alt='person' />
                    </div>
                    <div className='person person-2'>
                        <img src={cultureImage2} className='person__image2' alt='person' />
                        <img src={cultureImage3} className='person__image2' alt='person' />
                    </div>
                    <div className='person'>
                        <img src={cultureImage4} className='person__image' alt='person' />
                    </div>
                </div>
                <section className='culture__statements'>
                    <div className='statement'>
                        <h4 className='statement__heading'>
                            Experienced professionals
                        </h4>
                        <p className='statement__text'>Experienced financial analysts and coaches.
                            Who have been vetted and have a wealth of experience.
                            They will guide you through your wealth-building journey.
                            <br />
                            <br />
                            We have a great team of diverse and talented professionals who
                            share the values of the company. Because of the size of our dream,
                            we need more hands on deck and you are always welcome to apply.
                        </p>
                    </div>
                    <div className='statement'>
                        <h4 className='statement__heading'>
                            We give the best
                        </h4>
                        <p className='statement__text'>We know work can be quite dreadful,
                            so we try to make it fun, as much as we can. We also offer competitive
                            salaries as well as great packages.
                            <br />
                            <br />
                            At Ardilla, dedication and excellence are always rewarded.
                            No politics and no funny business.
                        </p>
                    </div>
                </section>
            </section>



            <section className='ardilla-values-section'>
                <div className='ardilla-values-container'>
                    <h2 className='ardilla-values-heading'> Our Values</h2>
                    <p className='ardilla-values-info'>At Ardilla, our mission is to help people across the
                        continent build wealth and achieve well thought
                        out financial goals. However, we cannot do it alone.</p>
                    <div className='ardilla-values'>
                        {ardillaValues.map((data) => {
                            return (
                                <div key={data.id} className='ardilla-value'>
                                    <div>
                                        <h5 className='ardilla-value__heading'>{data.ardillaValue}</h5>
                                        <p className='ardilla-value__explanation'>{data.ardillaValueExplanation}</p>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>

            </section>

            <section className='people-matter-section'>
                <div className='people-matter-container'>
                    <h2 className='people-matter-heading'>People are what matters </h2>
                    <div className='our-people'>
                        {peopleMatterData.map((data) => {
                            return (
                                <div className='our-person-container'>
                                    <div className='our-person'>
                                        <img src={peopleMatterImage} alt='person' className='our-person__image' />
                                        <img src={playIcon} alt='play' className='our-person-play-icon' />
                                        <p className='our-person__name'>{data.name} <br /> <span className='our-person__role'>{data.role}</span></p>
                                    </div>
                                    <p className='our-person-opinion'>{data.opinion}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>


            <section className='perks-section' >
                <div className='perks-section-info'>
                    <p>Beyond a competitive salary, we offer so much
                        more in support and necessary tools needed to
                        get the best results.</p>
                </div>
                <p className='perks-title'>Perks</p>
                <div className='perks'>
                    {perksData.map((data) => {
                        return (
                            <div className='perk' key={data.perk}>
                                <img src={data.perkImage} alt='perk' className='perk__image' />
                                <h5 className='perk__name'>{data.perk}</h5>
                                <p className='perk__info'>{data.perkInfo}</p>
                            </div>
                        )
                    })}
                </div>
            </section>



            <section className='position-section'>
                <div className='position-container'>
                    <h2 className='position-container-heading'>Open Positions</h2>
                    <div className='roles'>
                        <Carousel
                            autoplay
                            slidesToShow={2}
                            dots={false}
                            responsive={responsive}
                            afterChange={getCurrentIndex}
                            ref={ref}
                        >
                            {positionData.map((data) => {
                                return (
                                    <div key={data.position} className='position-contain' >
                                        <div className='position-card'>
                                            <img src={data.positionImage} className='position-card__image' alt='position' />
                                            <div className='position-information'>
                                                <h4 className='position-card-heading'>{data.position}</h4>
                                                <p className='position-card_jd'>{data.jd}</p>
                                                <p className='position-availability'>{data.availability ? '' : 'Position Closed'}</p>
                                            </div>
                                        </div>
                                        <div className='position-card'>
                                            <img src={data.positionImage} className='position-card__image' alt='position' />
                                            <div className='position-information'>
                                                <h4 className='position-card-heading'>{data.position}</h4>
                                                <p className='position-card_jd'>{data.jd}</p>
                                                <p className='position-availability'>{data.availability ? '' : 'Position Closed'}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    <ProgressStep currentSlide={activeSlide + 1} noOfSlides={3} />
                    <div className='arrow-container'>
                        <img src={forwardArrow} className='forward-arrow' alt='forward' style={{ marginRight: '15px' }} onClick={handlePrev} />
                        <img src={backwardArrow} className='backward-arrow' alt='forward' onClick={handleNext} />
                    </div>
                </div>
            </section>
        </>

    )
}
