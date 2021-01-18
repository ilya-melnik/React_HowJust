import React, {useRef, useState} from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

export default {
    title: 'Components/Input'
} as Meta;


const Template: Story = () => <input/>;

export const Input = Template.bind({});


const Template1: Story = () => {
    const [value, setValue] = useState("")
    return (
        <div>
            <input value={value} onChange={(e) => {
                setValue(e.currentTarget.value)
            }}/> - {value}
        </div>
    )
};

export const InputTrack = Template1.bind({})


//-----------------------------------------------------
const Template2: Story = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div>
            <input ref={inputRef} id={"el"}/>
            <button onClick={(e) => {
                const el =inputRef.current as HTMLInputElement;
                setValue(el.value)
            }}>Push
            </button>
            actual value: {value}
        </div>
    )
};

export const InputPush = Template2.bind({})
