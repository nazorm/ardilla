import React, { useRef } from 'react';
import './styles.scss';
import { Button } from '../../../../components/Button';
import interestImage from '../../../../assets/interest-image.png'
import stockArrow from '../../../../assets/stock-arrow.png'
import playIcon from '../../../../assets/icons/play-icon.svg'
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { offers, pressReviews, testifierData, tractionDetails } from './data';
import previewImage from '../../../../assets/ardilla-preview.svg'
import spiro from "../../../../assets/icons/spiro.svg";
import { responsive } from '../../../../utils/constants';

export const TransparentOpportunities = () => {
    //TODO handle get started
    const handleGetStarted = () => {

    }
    //TODO handle invest
    const handleInvest = () => { }

    return (
        <>
            <section className='interest-transparency-container'>
                <div className='interest-transparency'>
                    <div className='transparency-text-container'>
                        <p className='transparency-text'>We’re Keen On <br /> <span className='transparency-highlight'>Transparency</span></p>
                        <p className='interest-info'>Calculate your interests everytime you save on our platform</p>
                        <Button btnType='primary' text='Get Started' primaryAction={handleGetStarted} />
                    </div>
                    <img src={interestImage} alt='interest' className='calculator-image' />
                </div>
            </section>
            <section className='investment-section'>
                <div className='investment-container'>
                    <div className='investment'>
                        <h2 className='investment__heading'>
                            Unlimited <span className='investment__heading-highlight'> Investment <br /> Opportunities</span>
                        </h2>
                        <p className='investment__info'>Plan towards your future by investing with ardilla,
                            Grow your money confidently and securely with the available investment oppurtuinities  </p>
                        <Button btnType='outline' text='Invest with ardilla (Coming Soon)' hasIcon={true} primaryAction={handleInvest} />
                    </div>
                    <img src={stockArrow} alt='stock' className='stock-image' />
                </div>
            </section>
            <section className='access-container'>
                <div className='access'>
                    <h2 className='access__heading'>
                        Access More With Your Money
                    </h2>
                    <p className='access__info'>Earn, learn, parlay, and grow financially. With Ardilla, you have more opportunities than ever at your finger tips. Why not take advantage today?</p>
                    <Button btnType='outline-secondary' text='Invest with ardilla (Coming Soon)' hasIcon={true} primaryAction={handleInvest} />
                    <div className='offers-container'>
                        <div className='offers'>
                            {offers.map((data) => {
                                return (
                                    <div className='offer' key={data.name}>
                                        <img src={data.offerImg} className='offer__image' alt='offer' />
                                        <h4 className='offer__name'>{data.name}</h4>
                                        <p className='offer__info'>{data.info}</p>
                                        <Link to={data.path} className='offer__cta'>Learn More</Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className='testimonials-section'>
                <section className='testimonials-container'>
                    <h2 className='testimonial-heading'>
                        Don’t Take Our <span className='testimonial-highlight'>Word</span> For It
                    </h2>
                    <h4 className='testimonial-subheading'>Listen to testimonials from Ardilla users building wealth</h4>
                    <div className='testimonials'>
                        <Carousel autoplay slidesToShow={3} dots={false} responsive={responsive}>
                            {testifierData.map((data, index) => {
                                return (
                                    <div className='testimony' key={index}>
                                        <img src={data.testifierImg} alt='testifier' className='testimony__image' />
                                        <p className='testimony__testifier'>{data.name} <br />
                                            <span className='testimony__name'>{data.testimony}</span>
                                        </p>
                                        <div className='play-container'>
                                            <img src={playIcon} className='play-icon' alt='play' />
                                        </div>

                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                </section>
            </section>

            <section className='review-section'>
                <div className='reviews-container'>
                    <p className='review-text'>Press Reviews</p>
                    <div className='reviews'>
                        {pressReviews.map((data) => {
                            return (
                                <div className='review'>
                                    <img src={data.companyLogo} className='review__image' alt='review' />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='preview-container'>
                    <h2 className='preview-heading'>Also Available on the Web</h2>
                    <p className='preview-subheading'>Increase your bread & butter on the app or on the web. The Ardilla app services are also available on the web.</p>
                    <img src={previewImage} alt='preview' className='preview-image' />
                </div>
            </section>

            <section className='traction-section'>
                <div className='traction-container'>
                <h2 className='traction-heading'>Traction</h2>
                <h4 className='traction-subheading'>Our products and investments grossed 1.1 billion in 2022</h4>
                <div className='tractions'>
                    {tractionDetails.map((data) => {
                        return (
                            <div key={data.name} className='traction'>
                                <img src={spiro} className='traction__spiro' alt='spiro' />
                                <span className='traction__name'>
                                    {data.name}
                                    {' '}
                                    <span className='traction__info'>{data.info}</span>
                                </span>
                                <p className='traction__risk'></p>
                            </div>
                        )
                    })}
                </div>
                </div>
     
            </section>
        </>
    )
}