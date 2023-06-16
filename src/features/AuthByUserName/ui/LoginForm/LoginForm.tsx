import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/DynamicModuleLoader/DynamicModuleLoader';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string
}
const initialReducers: ReducersList = {
    loginForm: loginReducer,
};
const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

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
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
