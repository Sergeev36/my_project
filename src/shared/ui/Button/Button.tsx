import { classNames, Mods } from 'shared/libs/classNames/classNames';
import {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
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
  disabled?: boolean;
  children?: ReactNode;

}

export const Button = memo(({
    theme = ThemeButton.OUTLINE,
    className,
    square,
    size = ButtonSize.M,
    children,
    disabled,
    ...otherProps
}: ButtonProp) => {
    const mods: Mods = {
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(styles.Button, mods, [className, styles[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
