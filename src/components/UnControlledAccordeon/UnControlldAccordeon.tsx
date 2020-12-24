import React, {useState} from 'react';

type AccordeonType = {
    titleValue: string
    //collapsed: boolean
}

function UnControlldAccordeon(props: AccordeonType) {
    let [ collaps, setCollaps] = useState(true)

    return (

        <div>
            <AccordionTitle title={props.titleValue} onClick={ () => {setCollaps(!collaps)} }/>
            { collaps && <AccordionBody/>}
        </div>
    )

}
type AcordionTitleType = {
    title: string
    onClick: ()=> void
}
function AccordionTitle(props: AcordionTitleType) {
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

export default UnControlldAccordeon;

