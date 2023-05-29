import { addDecorator } from '@storybook/react';
import { StyleDecorator } from 'shared/configs/storybook/StyleDecorator';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { RouterDecorator } from 'shared/configs/storybook/RouterDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
