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
   status: onn => {}
};

// сейчас добавилась функция которая изменяется по Cklik on UI (Не понимаю когда отображается так, всегда описывать ли в sb)
// Нужно ли отображать захардкордженные значения, как ?