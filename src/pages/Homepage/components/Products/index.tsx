import React, { useState } from 'react';
import './styles.scss';
import checkIcon from '../../../../assets/icons/check.svg'
import { Carousel } from 'antd';
import { productInfo } from './data';
import { ProgressBar } from '../../../components/ProgressBar';

export const Products = () => {
    const [activeSlide, setActiveSlide] = useState<number>(0)

    const getCurrentIndex = (currentSlide: number) => {
        setActiveSlide(currentSlide)
    }

    return (
        <section className='products-section'>
            <div className='products-container'>
                <h2 className='heading'>Products</h2>
                <div className='product-track'>
                    <Carousel autoplay dots={false} afterChange={getCurrentIndex} >
                        {productInfo.map((data) => {
                            return (
                                <div>
                                    <div key={data.name} className='product'>
                                        <div className='product_desc'>
                                            <p className='product_desc__name'>
                                                {data.name}
                                                <br />
                                                <span className='product_desc__catchphrase'>
                                                    {data.catchphrase}
                                                </span>
                                                <br />
                                                <span className='product_desc__info'>
                                                    {data.productInfo}
                                                </span>
                                            </p>
                                            <ul className='product_desc__list'>
                                                {data.items.map((item) => {
                                                    return (
                                                        <li key={item} className='product_desc__item'>
                                                            <img src={checkIcon} className='check' alt='check' />
                                                            {item}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <img src={data.productImg} className='product__image' alt='product-img' />
                                    </div>
                                </div>


                            )
                        })}
                    </Carousel>

                </div>
                <ProgressBar currentSlide={activeSlide + 1} noOfSlides={5} />
            </div>
        </section>
    )
}