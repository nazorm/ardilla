import React from 'react';
import './styles.scss';
import checkIcon from '../../../../assets/icons/check.svg'
import saveImage from '../../../../assets/save.jpg';
import budgetImage from '../../../../assets/budget.jpg';
import investImage from '../../../../assets/invest.jpg';
import insureImage from '../../../../assets/insure.jpg';
import learnImage from '../../../../assets/learn.jpg';
import { Carousel } from 'antd';

export const Products = () => {





    const productInfo = [
        {
            name: 'save',
            catchphrase: 'Save at your own pace!',
            productInfo: 'Save your money daily, weekly, or monthly. No pressure. We work at your pace',
            productImg: saveImage,
            items: [
                'Create Unlimted savings plans',
                'Withdraw anytime',
                'Save with Friends with SAN ID',
                'Be better at saving',
                'Accountability profile',
                'Activity and report'
            ]
        },
        {
            name: 'Learn',
            catchphrase: 'Financial freedom begins with You and Ardilla',
            productInfo: 'Ardila offers wealth-building tips from great financial minds to help you get to where you need to be.',
            productImg: learnImage,
            items: [
                'Create Unlimted savings plans',
                'Withdraw anytime',
                'Save with Friends with SAN ID',
                'Be better at saving',
                'Accountability profile',
                'Activity and report'
            ]
        },
        {
            name: 'Invest',
            catchphrase: 'Save at your own pace!',
            productInfo: 'Save your money daily, weekly, or monthly. No pressure. We work at your pace',
            productImg: investImage,
            items: [
                'Create Unlimted savings plans',
                'Withdraw anytime',
                'Save with Friends with SAN ID',
                'Be better at saving',
                'Accountability profile',
                'Activity and report'
            ]
        },
        {
            name: 'Budget',
            catchphrase: 'Save at your own pace!',
            productInfo: 'Save your money daily, weekly, or monthly. No pressure. We work at your pace',
            productImg: budgetImage,
            items: [
                'Create Unlimted savings plans',
                'Withdraw anytime',
                'Save with Friends with SAN ID',
                'Be better at saving',
                'Accountability profile',
                'Activity and report'
            ]
        },
        {
            name: 'Insurance',
            catchphrase: 'Save at your own pace!',
            productInfo: 'Save your money daily, weekly, or monthly. No pressure. We work at your pace',
            productImg: insureImage,
            items: [
                'Create Unlimted savings plans',
                'Withdraw anytime',
                'Save with Friends with SAN ID',
                'Be better at saving',
                'Accountability profile',
                'Activity and report'
            ]
        }
    ]
    return (
        <section className='products-section'>
            <div className='products-container'>
                <h2 className='heading'>Products</h2>
                <div className='product-track'>
                    <Carousel autoplay dots={false}>
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
            </div>

        </section>
    )
}