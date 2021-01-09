import React, {useState} from "react";


export type OnnOffType = {
    //on: boolean
    status: (onn: boolean) => void
}


export function UnControlledOnnOff(props: OnnOffType) {
    let [on, setOn] = useState(false)
    const glav = {
        height: "100px",
        width: "200px",
        margin: '10px auto',
        border: '1px solid black',
        paddingTop: '5px',
    }
    const OnnStyle = {
        height: '20px;',
        width: '30px',
        display: 'inline-block',
        border: '1px solid gray',
        padding: '2px',
        backgroundColor: on ? 'lightgreen' : 'white',


    }
    const OffStyle = {
        height: '20px',
        width: '30px',
        display: 'inline-block',
        border: '1px solid gray',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: !on ? 'red' : 'white',
    }
    const indicatorStyle = {
        height: '10px',
        width: '10px',
        display: 'inline-block',
        borderRadius: '5px',
        border: '1px solid gray',
        marginLeft: '5px',
        backgroundColor: on ? 'lightgreen' : 'red',

    }
    const onClickHandler = () => {
        setOn(true)
        props.status(true)
    }
    const offClickHandler = () => {
        setOn(false)
        props.status(false)
    }

    return <div style={glav}>
        <div style={OnnStyle} onClick={onClickHandler}>Onn</div>
        <div style={OffStyle} onClick={offClickHandler}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}

