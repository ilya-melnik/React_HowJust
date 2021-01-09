import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';


import {AccordionType, UnControlledAccordion} from "./UnControlldAccordeon";

export default {
    title: 'Components/UnControlledAccordion',
    component: UnControlledAccordion,
} as Meta;


const Template: Story<AccordionType> = (args) => <UnControlledAccordion {...args} />;

export const UnControlledAccordion1 = Template.bind({});
UnControlledAccordion1.args = {
    titleValue: "Users" // как передать пропсы ?
};

export const UnControlledAccordion2 = Template.bind({});
UnControlledAccordion2.args = {
    titleValue: "menu" // как передать пропсы ?
};


// What else need show in it component ?
// (AccordionTitleType)