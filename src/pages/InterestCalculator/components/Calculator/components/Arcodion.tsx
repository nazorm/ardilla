import React, { useState } from 'react';
import './styles.scss';

interface IFaqData {
    faqData: IArcodionProps[]
}
interface IArcodionProps {
    id: number,
    title: string,
    content: string,
}

export const Arcodion = ({ faqData }: IFaqData) => {
    const [activeItem, setActiveItem] = useState<number>();

    const handleActiveItem = (id: number) => {
        if (activeItem === id) {
            setActiveItem(0)
        }else{
            setActiveItem(id)
        }
       
    }
    return (
        <section className="accordion">
            {faqData.map((data) => {
                return (
                    <div className="accordion__item" onClick={() => handleActiveItem(data.id)}>
                        <div className="accordion__title">
                            <p className='faq-title'>{data.title}</p>
                            <p className='arccodion__sign'>{activeItem === data.id ? '-' : '+'}</p>
                        </div>
                        {activeItem === data.id && <div className="accordion__content">{data.content}</div>}
                    </div>
                )
            })}

        </section>
    )
}