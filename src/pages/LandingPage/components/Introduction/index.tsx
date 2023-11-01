import React, { useState } from 'react';
import './styles.scss';
import landingoverlay from '../../assets/landing-overlay.png'
import logo from '../../../../assets/icons/logo.svg';
import hamburger from '../../assets/icons/hamburger.svg'
import spotlight from '../../assets/icons/spotlight.svg'
import { Button } from '../../../../components/Button';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { AModal } from '../Modal';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
    email: yup.string().email().required(),

});
export const Introduction = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleClose = () => {
        setIsModalOpen(false);
    }

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            tenor: '',
            select: {}
        },
        resolver: yupResolver(schema),
    });

    //TODO Handle Get started
    const handleGetStarted = () => {
    }
    const handleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen)
    }
    const onSubmit = (data: any) => {
        console.log(data)
        showModal()
    };
    return (
        <>
            <section className='landing-introduction'>
                <header className='landing-header'>
                    <img src={logo} alt='logo' className='landing-logo' />
                    {/* <p className='feature'>• Features</p> */}
                    <nav className='nav'>
                        <ul className='nav-list'>
                            <li className='nav-item'>
                                <Link to={'/home'} className='nav-item'>
                                    Business
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={'/interest/calculator'} className='nav-item'>
                                    Calculator
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={'/careers'} className='nav-item'>
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <img src={hamburger} className='hamburger' alt='hamburger' onClick={handleMobileNav} />
                </header>
                {isMobileNavOpen && (
                    <div className='mobile-nav'>
                        <ul className='mobile-nav-list'>
                            <li className='mobile-nav-item'>
                                <Link to={'/home'} className='mobile-nav-item'>
                                    Business
                                </Link>
                            </li>
                            <li className='mobile-nav-item'>
                                <Link to={'/interest/calculator'} className='mobile-nav-item'>
                                    Calculator
                                </Link>
                            </li>
                            <li className='mobile-nav-item'>
                                <Link to={'/careers'} className='mobile-nav-item'>
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
                <div className='landing-intro-text-container'>
                    <h1 className='landing-introduction__heading'>
                        Your  portal <br /> to more
                    </h1>
                    <p className='landing-introduction__text'>Wealth building is possible. You just need the right partner. With better financial tools, Ardilla has made it so much easier for you to start building wealth. Take advantage of the Ardilla platform by signing up with your email address..</p>
                    <form className='landing-form' onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => <input {...field} type='text' placeholder='someone@example.com' className='landing-input' />}
                        />
                        <Button btnType='primary' text='Get Started' primaryAction={handleGetStarted} hasIcon={true} />
                    </form>
                    <p className='error'>{errors.email?.message}</p>
                    <img src={spotlight} className='spotlight-image' alt='spotlight' />
                </div>
                <div className='overlay'>
                    <img src={landingoverlay} className='overlay-image' alt='overlay' />
                </div>

            </section>


            <AModal
                isModalOpen={isModalOpen}
                handleOk={handleClose}
                handleCancel={handleClose} />
        </>

    )
}