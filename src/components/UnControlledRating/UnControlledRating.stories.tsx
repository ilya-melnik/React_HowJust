import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {StarType, UnControlledRating} from "./UnControlledRating";
import {action} from "@storybook/addon-actions";




export default {
    title: 'Components/UnControlledRating',
    component: UnControlledRating,
} as Meta;


const Template: Story<{}> = (args) => <UnControlledRating {...args} />;

export const UnControlledRating1 = Template.bind({});
UnControlledRating1.args = {
    selected: false, // можно ли прописать условие
    value: 1,
    setValue: () => { }
};

export const UnControlledRating2 = Template.bind({});
UnControlledRating2.args = {
    selected: true, // можно ли прописать условие
    value: 3,
    setValue: () => {}
};

