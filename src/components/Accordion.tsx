import React from "react";
type AccordionType = {
    title: string
    collapsed: boolean
}

function Accordion(props:AccordionType) {

    if(props.collapsed === true){
        return <div>
            <AccordionTitle title={props.title} />
        </div>
    } else{
        return <div>
            <AccordionTitle title={props.title} />
            <AccordionBody />
        </div>
    }
}


type AccordionTitleType = {
    title: string
}

function AccordionTitle (props: AccordionTitleType) {
    return <div>
        <h3>--- {props.title} ---</h3>
    </div>
}

function AccordionBody () {
    return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
}


export default Accordion;
