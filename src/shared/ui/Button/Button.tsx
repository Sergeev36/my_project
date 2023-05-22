import { classNames } from 'shared/libs/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear'
}

export interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton;
}

export const Button:FC<ButtonProp> = ({
    theme, className, children, ...otherProps
}) => (
    <button
        type="button"
        className={classNames(styles.Button, {}, [className, styles[theme]])}
        {...otherProps}
    >
        {children}
    </button>
);
