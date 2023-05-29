import React from 'react';
import './styles.scss';
import btnIcon from '../../../assets/icons/invest-icon.svg';
import btnIcon2 from '../../../assets/icons/invest-icon-white.svg';

interface IButtonProps {
    text: string;
    btnType: string;
    primaryAction: () => void;
    hasIcon?: boolean

}


export const Button = (props: IButtonProps) => {
    const { text, btnType, primaryAction, hasIcon } = props;
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
        case "outline":
            colorClasses = { border: "1px solid #8807F7", color: "#8807F7", backgroundColor: 'transparent', fontSize:'10px' }
            break;
        case "outline-secondary":
            colorClasses = { border: "1px solid #ffffff", color: "#ffffff", backgroundColor: 'transparent', fontSize:'10px' }
            break;
        default:
            colorClasses = "green"
            break;
    }
    return (
        <button style={colorClasses} onClick={primaryAction} className='btn'>
            {text}
            {hasIcon && <img src={btnType === 'outline-secondary' ? btnIcon2 : btnIcon} className='btn-icon' alt='invest' />}
        </button>
    )
}