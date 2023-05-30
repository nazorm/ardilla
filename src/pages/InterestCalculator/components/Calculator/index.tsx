import React, { useMemo, useState } from 'react';
import './styles.scss';
import { useForm, Controller } from "react-hook-form";
import DropdownCaret from '../../../../assets/icons/dropdown-caret.svg';
import graph from '../../../../assets/graph.png';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Select } from 'antd';
import { TextInput } from '../../../components/Form/index';
import { Button } from '../../../components/Button';
import { Divider } from './components/Divider';
import { demoSteps, faqData } from './data';
import { Arcodion } from './components/Arcodion';
const { Option } = Select;

const schema = yup.object().shape({
    amount: yup.string().required(),
    tenor: yup.string().required(),
});


export const Calculator = () => {
    const [returns, setReturns] = useState<number>(0)
    const [savingPeriod, setSavingPeriod] = useState('')
    const [totalSavings, setTotalSavings] = useState(0)
    const { register, watch, getValues, control, handleSubmit } = useForm({
        defaultValues: {
            amount: '',
            tenor: '',
            select: {}
        },
        resolver: yupResolver(schema),
    });
    const savedAmount = watch('amount');
    const savedTenor = watch('tenor')

    useMemo(() => {
        const totalSavings = +savedAmount * +savedTenor
        const earning = totalSavings * 0.02
        setReturns(totalSavings + earning);
        setTotalSavings(totalSavings);
    }, [savedAmount, savedTenor])


    const handleChange = (value: string) => {
        setSavingPeriod(value)
    }
    //TODO Handle redirect
    const handleRedirectToSaving = () => {

    }
    const onSubmit = (data: any) => console.log(data);
    return (
        <>

            <section className='calculator-section'>
                <div className='calculator-container'>
                    <div className='calculator'>
                        <h2 className='heading'>Calculate Your Interests</h2>
                        <div >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="period" className='label'>How often are you saving?</label>
                                <br />
                                <Select defaultValue="Weekly" style={{ width: 120 }} onChange={handleChange}
                                    // suffixIcon={dropdownCaret}
                                    className='select'
                                    value={savingPeriod}
                                >
                                    <Option value="Daily">Daily</Option>
                                    <Option value="Weekly">Weekly</Option>
                                    <Option value="Monthly">
                                        Monthly
                                    </Option>
                                </Select>
                                <Controller
                                    name="amount"
                                    control={control}
                                    render={({ field }) => <TextInput
                                        {...field}
                                        type='number'
                                        label='How much are you saving?' />}
                                />

                                <Controller
                                    name="tenor"
                                    control={control}
                                    render={({ field }) => <TextInput
                                        {...field}
                                        type='number'
                                        label='How long are you saving for? (In months)' />}
                                />

                            </form>

                        </div>
                    </div>

                    <div className='result-container'>
                        <div className='result'>
                            <p className='returns-label'>
                                Total Balance
                                <br />
                                <span className='returns'>
                                    ₦{returns > 0 ? returns : 0}
                                </span>
                            </p>
                            <p className='returns-label'>
                                Saving {' '}
                                <span className='saving-returns'>
                                    ₦{savedAmount ? Number(savedAmount) : 0} {' '}</span>{savingPeriod ? savingPeriod : 'monthly'} for {savedTenor ? savedTenor : '3'} {savingPeriod ? savingPeriod : 'months'} will result in a balance of <span className='saving-returns'>
                                    ₦{returns}</span></p>
                            <p className='returns-label'>
                                Interest
                                <br />
                                <span className='returns'>
                                    ₦{returns > 0 ? returns - totalSavings : 0}
                                </span>
                                <span className='return-percent'>
                                    {returns > 0 ? ' (2%)' : ''}</span>
                            </p>
                            <p className='returns-label'>
                                Total savings
                                <br />
                                <span className='returns'>
                                    ₦{returns > 0 ? totalSavings : 0}
                                </span>
                                <span className='return-percent'>
                                    {returns > 0 ? ' (2%)' : ''}</span>
                            </p>
                            <img src={graph} className='graph'
                                alt='graph' />
                            <div className='result-btn'>
                                <Button btnType='primary' text='start saving now' primaryAction={handleRedirectToSaving} />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='values-section'>
                <div className='values-container'>
                    <h2 className='value-section-heading'>Interest you can count on</h2>
                    <div className='core-values-container'>
                        <div className='core-value'>
                            <Divider />
                            <div className='values'>
                                <div className='value'>
                                    <h3 className='value__heading'>More Interest</h3>
                                    <p className='value__text'>Enjoy better interest rates than the average bank account when you save with any of the Ardilla savings plan.</p>
                                </div>
                                <div className='value'>
                                    <h3 className='value__heading'>Transparency</h3>
                                    <p className='value__text'>No hidden charges and no vague deductions. Save with Ardilla and get your full interests.</p>
                                </div>
                            </div>
                        </div>
                        <div className='core-value'>
                            <Divider />
                            <div className='values'>
                                <div className='value'>
                                    <h3 className='value__heading'>Values</h3>
                                    <p className='value__text'>Your values matter to us and we are 100% committed to upholding those. Whether it is with Halal or the Ardilla saving plans.</p>
                                </div>
                                <div className='value'>
                                    <h3 className='value__heading'>Complete Withdraws</h3>
                                    <p className='value__text'>Withdraw your entire savings+ interest upon maturity. No minimum balance..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='demo-section'>
                <div className='demo-container'>
                    <h2 className='demo-heading'>
                        How It Works
                    </h2>
                    <div className='steps'>
                        {demoSteps.map((data) => {
                            return (
                                <div className='step'>
                                    <h3 className='step__title'><span className='step__count'> {data.step}</span> &nbsp;{data.title}</h3>
                                    <img src={data.demoImg} className='demo-image' alt='demo' />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className='faq-section'>
                <div className='faq-container'>
                    <h3 className='faq-heading'>Questions We Have been Asked</h3>
                    <div className='arcodion-container'>
                    <Arcodion faqData = {faqData}/>
                    </div>
                </div>
            </section>
        </>
    )
}