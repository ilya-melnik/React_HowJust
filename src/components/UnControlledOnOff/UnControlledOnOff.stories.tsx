import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

import {OnnOffType, UnControlledOnnOff} from "./OnOff";


export default {
    title: 'Components/UnControlledOnnOff',
    component: UnControlledOnnOff,
} as Meta;


const Template: Story<OnnOffType> = (args) => <UnControlledOnnOff {...args} />;

export const UnControlledOnnOff1 = Template.bind({});
UnControlledOnnOff1.args = {
    status: onn => {},
    defaultValue: true
};

export const UnControlledOnnOff2 = Template.bind({});
UnControlledOnnOff2.args = {
    status: onn => {},
    defaultValue: false
};



