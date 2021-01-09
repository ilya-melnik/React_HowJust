import React, {useState} from "react";

export type StarType = {
    value: 1|2|3|4|5
    selected: boolean
    setValue: (setValue: 1|2|3|4|5) => void

}

export function UnControlledRating() {
    let [value, setValue] = useState(1)
    return (
        <div>
            <Star selected={value >= 1} setValue={setValue} value={1}/>
            <Star selected={value >= 2} setValue={setValue} value={2}/>
            <Star selected={value >= 3} setValue={setValue} value={3}/>
            <Star selected={value >= 4} setValue={setValue} value={4}/>
            <Star selected={value >= 5} setValue={setValue} value={5}/>
        </div>
    )


}

function Star(props: StarType) {


    return <span onClick={ ()=> {props.setValue(props.value)} }> {props.selected ? <b>star</b>: "star"}</span>

}

