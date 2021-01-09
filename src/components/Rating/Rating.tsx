import React, {useState} from "react";

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5
export type StarType = {
    selected: boolean
    onClickCallback: () => void
}

export type RatingPropsType = {
    value: ValueType
    onClick: (value: ValueType) => void
}

export function Rating(props: RatingPropsType) {
    let [value, setValue] = useState<ValueType>(props.value)
    return (

        <div>
            <Star selected={value > 0} onClickCallback={() => {setValue(1) }} />
            <Star selected={value > 1} onClickCallback={() => {setValue(2) }} />
            <Star selected={value > 2} onClickCallback={() => {setValue(3) }} />
            <Star selected={value > 3} onClickCallback={() => {setValue(4) }} />
            <Star selected={value > 4} onClickCallback={() => {setValue(5) }} />
        </div>
    )
}
function Star(props: StarType) {
    return <span onClick={props.onClickCallback}>
        {props.selected ? <b> star </b> : " star "}
    </span>

}