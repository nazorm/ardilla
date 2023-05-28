import React from 'react';
import './styles.scss';

interface IButtonProps {
    text: string;
    btnType: string;
    primaryAction: () => void
}


export const Button = (props: IButtonProps) => {
    const { text, btnType, primaryAction } = props;
    let colorClasses = {}
    switch (btnType) {
        case "primary":
            colorClasses = { backgroundColor: "#8807F7", color: '#ffffff' }
            break;
        case "secondary":
            colorClasses = { backgroundColor: '#ffffff', color: 'black' }
            break;
        case "danger":
            colorClasses = { backgroundColor: 'red', color: '#ffffff' }
            break;
        case "draft":
            colorClasses = { backgroundColor: "#8807F7", color: '#ffffff' }
            break;
        default:
            colorClasses = "green"
            break;
    }
    return (
        <button style={colorClasses} onClick={primaryAction} className='btn'>
            {text}
        </button>
    )
}