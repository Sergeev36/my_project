import { classNames } from 'shared/libs/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface InputProps extends HTMLInputProps {
  className?: string
  value?: string;
  onChange?: (value:string) => void;
  placeholder?: string;
  type?: string;
  autofocus?: boolean;
}

export const Input = memo(({
    className, value, onChange, placeholder, type = 'text', autofocus, ...otherProps
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target.selectionStart || 0);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(styles.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={styles.placeholder}>
                    {`${placeholder} >`}
                </div>
            )}
            <div className={styles.caretWrapper}>
                <input
                    ref={ref}
                    className={styles.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && <span className={styles.caret} style={{ left: `${caretPosition * 8.5}px` }} />}
            </div>
        </div>
    );
});
