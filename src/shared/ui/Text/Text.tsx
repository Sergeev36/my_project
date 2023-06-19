import { classNames } from 'shared/libs/classNames/classNames';
import { memo } from 'react';
import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY ='primary',
  ERROR = 'error'
}

export interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text = memo(({
    className, title, text, theme = TextTheme.PRIMARY,
}: TextProps) => (
    <div className={classNames(styles.Text, {}, [className, styles[theme]])}>
        {title && <p className={styles.title}>{title}</p>}
        {text && <p className={styles.text}>{text}</p>}
    </div>
));
