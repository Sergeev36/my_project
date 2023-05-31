import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';

import styles from './Navbar.module.scss';

export interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                /
            </div>
        </div>
    );
};
