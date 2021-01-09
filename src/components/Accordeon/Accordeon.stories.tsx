// Button.stories.tsx

import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

import Accordion, { AccordeonType } from "./Accordeon";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Components/Accordion',
    component: Accordion,
} as Meta;


const Template: Story<AccordeonType> = (args) => <Accordion {...args} />;

export const AccordionNotCollapsedExample = Template.bind({});
AccordionNotCollapsedExample.args = {
    titleValue: 'Menu',    // Почему не отображается ???
    collapsed: false,
    onChange: action("collapsed is changed ")
};

export const AccordionIsCollapsedExample = Template.bind({});
AccordionNotCollapsedExample.args = {
    titleValue: 'Users',
    collapsed: true,
    onChange: action("collapsed is changed ")
};

// При нажатии на UI ничего не меняется
// Что еще нужно уметь отображать ?