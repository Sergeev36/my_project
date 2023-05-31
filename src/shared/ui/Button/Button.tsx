import { classNames } from 'shared/libs/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l'
}

export interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton;
  square? : boolean;
  size?: ButtonSize;

}

export const Button:FC<ButtonProp> = ({
    theme,
    className,
    square,
    size = ButtonSize.M,
    children,
    ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [styles.square]: square,
        [styles[size]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(styles.Button, mods, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
