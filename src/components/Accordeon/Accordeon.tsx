import React from 'react';

type AccordeonType = {
    titleValue: string
    collapsed: boolean
    onChange: (value: boolean) => void
}

function Accordion(props: AccordeonType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={ props.onChange} />
            { !props.collapsed && <AccordionBody/>}
        </div>
    )

}

function AccordionTitle(props: any) {
    return (

        <>
            <h3 onClick={ () => {props.onChange()} }>{props.title}</h3>
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