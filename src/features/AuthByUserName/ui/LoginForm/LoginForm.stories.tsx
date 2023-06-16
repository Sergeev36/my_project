import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginForm from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import { StoreDecorator } from 'shared/configs/storybook/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: { username: 'user', password: '777' },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
    loginForm: { username: 'user', password: '777', error: 'ERROR' },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: { username: 'user', password: '777', isLoading: true },
})];
