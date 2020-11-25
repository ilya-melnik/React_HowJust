import React, {useState} from "react";




type OnnOffType = {
  on: boolean
    ChangeStatus: (on: boolean)=> void
}


 function OnnOff(props:OnnOffType){

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
        backgroundColor: props.on?'lightgreen':'white',


    }
     const OffStyle = {
         height: '20px',
         width: '30px',
         display: 'inline-block',
         border: '1px solid gray',
         marginLeft: '2px',
         padding: '2px',
         backgroundColor: !props.on?'red': 'white',
     }
     const indicatorStyle = {
         height: '10px',
         width: '10px',
         display: 'inline-block',
         borderRadius: '5px',
         border: '1px solid gray',
         marginLeft: '5px',
        backgroundColor: props.on ?'lightgreen': 'red',

     }

    return <div style={glav}>
            <div style={OnnStyle} onClick={ () => {props.ChangeStatus(true) }
            }>Onn</div>
            <div style={OffStyle} onClick={ () => {props.ChangeStatus(false)} }>Off</div>
            <div style={indicatorStyle}></div>
          </div>
}

export default OnnOff;