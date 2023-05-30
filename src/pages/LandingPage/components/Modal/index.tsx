import React from 'react';
import './styles.scss';
import { Modal } from 'antd';
import celebration from '../../assets/icons/celebration.svg';
import instagram from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
import facebook from './assets/facebook.svg'
import modalCheck from '../../assets/icons/modal-check.svg'
import backArrow from '../../assets/icons/back-arrow.svg';

interface IModalpProps {
    isModalOpen: boolean,
    handleOk: () => void,
    handleCancel: () => void
}

export const AModal = (props: IModalpProps) => {
    const { isModalOpen, handleOk, handleCancel } = props
    return (

        <Modal title=""
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            className='modal'
            closable={false}
        >
            <div className='amodal'>
                <p className='amodal__cta' onClick={handleOk}> <span><img src={backArrow} className='back-arrow-image' alt='back-arrow' /></span> &nbsp; Go Back</p>
                <div className='amodal__content'>
                    <img src={modalCheck} alt='check' />

                    <h3 className='amodal__title'><span>
                        <img src={celebration} className='celebration-icon' alt='celebration' />
                    </span>
                        Great!! You’re on the waitlist

                    </h3>
                    <div className='amodal__info-container'>
                        <p className='amodal__info'> An email would be sent to you in regards, Thank You</p>
                    </div>
                    <div className='amodal__footer'>
                        <div className='amodal-socials'>
                            <a href='https://www.instagram.com/' rel='noopener noreferrer' target='_blank' className='amodal-social'><img src={instagram} alt='instagram' className='amodal-social-icon' /></a>
                            <a href='https://www.facebook.com/' rel='noopener noreferrer' target='_blank' className='amodal-social'><img src={facebook} alt='instagram' className='amodal-social-icon' /></a>
                            <a href='https://www.twitter.com/' rel='noopener noreferrer' target='_blank' className='amodal-social'><img src={twitter} alt='instagram' className='amodal-social-icon' /></a>

                        </div>

                    </div>
                </div>

            </div>
        </Modal>


    )
}