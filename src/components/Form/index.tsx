import React from 'react';
import './styles.scss';


interface ITextInputProps {
    label?: string,
    error?: string,
    [x: string]: any;
}


export const TextInput = (props: ITextInputProps) => {
    const { label, name, error, ...textInputProps } = props
    return (
        <div className='input-container'>
            {label && <label className='label'
                htmlFor={name}>{label}</label>}
            <br />
            <input
                className='input'
                placeholder=""
                {...textInputProps}
                id={name}
                name={name}
            />
            <p className='error'>
                {error}
            </p>
        </div>
    )
}
