import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import styles from './Navbar.module.scss';

export interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(styles.Navbar, {}, [className])}>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    className={styles.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={styles.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
