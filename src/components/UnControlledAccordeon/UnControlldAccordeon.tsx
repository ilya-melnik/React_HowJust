import React, {useState} from 'react';

export type AccordionType = {
    titleValue: string
    //collapsed: boolean
}

export function UnControlledAccordion(props: AccordionType) {
    let [ collaps, setCollaps] = useState(true)

    return (

        <div>
            <AccordionTitle title={props.titleValue} onClick={ () => {setCollaps(!collaps)} }/>
            { collaps && <AccordionBody/>}
        </div>
    )

}
type AccordionTitleType = {
    title: string
    onClick: ()=> void
}
function AccordionTitle(props: AccordionTitleType) {
    return (

        <>
            <h3 onClick={ ()=> {props.onClick()} }>---{props.title}---</h3>
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


