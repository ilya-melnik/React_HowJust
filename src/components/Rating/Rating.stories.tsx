// Button.stories.tsx

import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';


import {action} from "@storybook/addon-actions";
import {Rating, RatingPropsType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
} as Meta;


const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const AccordionNotCollapsedExample = Template.bind({});
AccordionNotCollapsedExample.args = {
    titleValue: 'Rating stories',
    collapsed: false,
    onChange: action("collapsed is changed ")
};

export const AccordionIsCollapsedExample = Template.bind({});
AccordionNotCollapsedExample.args = {
    titleValue: 'qweerr',
    collapsed: true,
    onChange: action("collapsed is changed ")
};
