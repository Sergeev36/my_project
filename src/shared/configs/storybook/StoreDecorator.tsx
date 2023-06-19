import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvaider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUserName';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer, ...asyncReducer }}>
        <StoryComponent />
    </StoreProvider>
);
