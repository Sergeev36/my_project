import { classNames } from 'shared/libs/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo(({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}: AppLinkProps) => (
    <Link
        to={to}
        className={classNames(styles.AppLink, {}, [className, styles[theme]])}
        {...otherProps}
    >
        {children}
    </Link>
));
