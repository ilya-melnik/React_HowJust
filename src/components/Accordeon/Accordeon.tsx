import React from 'react';

export type AccordionType = {
    titleValue: string
    collapsed: boolean
    onChange: (value: boolean) => void
    color?: string
}

function Accordion(props: AccordionType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={ props.onChange} color={props.color} collapsed={props.collapsed}/>
            { !props.collapsed && <AccordionBody/>}
        </div>
    )

}

// ? \|/
type  AccordionTitlePropsType = {
    title: string
    onChange: (value: boolean) => void
    color?: string
    collapsed: boolean


}
export function AccordionTitle(props: AccordionTitlePropsType) {
    return (

        <>
            <h3 style={{color: props.color ? props.color: 'red'}}
                onClick={ () => {props.onChange(!props.collapsed)} }>{props.title}</h3>
        </>
    );
}

function AccordionBody() {
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}

export default Accordion;
