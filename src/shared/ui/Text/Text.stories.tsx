import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title title title',
    text: 'Text text text',

};
export const Error = Template.bind({});
Error.args = {
    title: 'Title title title',
    text: 'Text text text',
    theme: TextTheme.ERROR,
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title title title',
    text: 'Text text text',

};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
