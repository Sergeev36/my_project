import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Text text={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                type="text"
                className={styles.input}
                placeholder={t('Введите имя')}
                value={username}
                onChange={onChangeUsername}
            />
            <Input
                type="text"
                className={styles.input}
                placeholder={t('Введите пароль')}
                value={password}
                onChange={onChangePassword}
            />
            <Button
                className={styles.loginBtn}
                theme={ThemeButton.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
