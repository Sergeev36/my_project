import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/libs/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOptions {
  value: string
  content: string
}

export interface SelectProps {
  className?: string
  label?: string
  options?: SelectOptions[]
  value?: string;
  onChange?: (value: string) => void
  readonly?: boolean;
}

export const Select = ({
    className, label, options, value, onChange, readonly,
}: SelectProps) => {
    const { t } = useTranslation();

    const mods: Mods = {
        [styles.readonly]: readonly,
    };

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionsList = useMemo(
        () => options?.map((opt) => (
            <option
                className={styles.options}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        )),
        [options],
    );

    return (
        <div className={classNames(styles.Wrapper, mods, [className])}>
            {label && (
                <span className={styles.label}>
                    {`${label}>`}
                </span>
            )}
            <select disabled={readonly} className={styles.select} value={value} onChange={onChangeHandler}>
                {optionsList}
            </select>
        </div>
    );
};
