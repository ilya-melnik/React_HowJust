// Button.stories.tsx

import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Rating, RatingPropsType, StarType, ValueType} from "./Rating";


export default {
    title: 'Components/Rating',
    component: Rating,
} as Meta;


const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const RatingEmpty = Template.bind({});
RatingEmpty.args = {
    value: 1,
    onClick: (x=>x)
};

export const RatingValue1 = Template.bind({});
RatingValue1.args = {
   value: 1,
    onClick: (x=>x)
};

export const RatingValue2 = Template.bind({});
RatingValue2.args = {
    value: 2,
    onClick: (x=>x)
};
export const RatingValue3 = Template.bind({});
RatingValue3.args = {
    value: 3,
    onClick: (x=>x)
};
export const RatingValue4 = Template.bind({});
RatingValue4.args = {
    value: 4,
    onClick: (x=>x)
};
export const RatingValue5 = Template.bind({});
RatingValue5.args = {
    value: 5,
    onClick: (x=>x)
};


// Рейтинг Empty в SB не отображается (должна ли она быть захардкорджена ?)
// Каждая история должна ли быть захардкордженна ?
// if need, (так было у Димыча в видио) тогда
// еще одна история нужна где видно как все меняется (пр кликие на UI изменяется рейтинг)
// Что еще нужно уметь отображать ?