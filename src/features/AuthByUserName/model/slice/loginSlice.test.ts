import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { LoginSchema } from 'features/AuthByUserName';
import { DeepPartial } from '@reduxjs/toolkit';

describe('loginSlice test', () => {
    test('username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'admin' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('qwerty')))
            .toEqual({ username: 'qwerty' });
    });

    test('password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345')))
            .toEqual({ password: '12345' });
    });
});
