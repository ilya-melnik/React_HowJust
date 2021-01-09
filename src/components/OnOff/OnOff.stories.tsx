// Button.stories.tsx

import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';


import {OnnOff, OnnOffType} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Components/OnOff',
    component: OnnOff,
} as Meta;


const Template: Story<OnnOffType> = (args) => <OnnOff {...args} />;

export const OnnOffTrue = Template.bind({});
OnnOffTrue.args = {
    on: true,
    ChangeStatus: action("ChangeStatus OnOff")
};

export const OnnOffFalse = Template.bind({});
OnnOffFalse.args = {
    on: false,
    ChangeStatus: action("ChangeStatus OnOff")
};

// сейчас две компоненты которые захардкорджены (меняются в control, нормально ли это ), НООРМ ЛИ ЧТО ПРИ НАЖАТИИ НА UI ОНИ НЕ СРАБАТЫВАЮТ
// Нужна ли история о том как работает переключатель при нажатии на UI --=--=--=--=--=
// --=--=-- (У Димы были две компоненты захордкорджены и одна которая показаывала свои способности через UI)