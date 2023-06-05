import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Qwerty',

};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Qwerty',

};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
