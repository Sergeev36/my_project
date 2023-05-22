import { classNames } from 'shared/libs/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
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
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={styles.mainLink}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('O сайте')}</AppLink>
            </div>
        </div>
    );
};
