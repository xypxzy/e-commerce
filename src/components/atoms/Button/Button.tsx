import {ReactNode} from "react";
import cls from './Button.module.css'

interface ButtonProps {
    color: 'primary' | 'secondary',
    size: 'm' | 'l',
    children: ReactNode
}

function Button(props: ButtonProps) {
    const {color = 'primary', size = 'm', children} = props;

    return (
        <button
            className={`
                ${cls.button}
                ${color === 'primary' ? cls.button__primary : cls.button__secondary}
                ${size === 'm' ? cls.m : cls.l}
                `}>
            {children}
        </button>);
}

export default Button;