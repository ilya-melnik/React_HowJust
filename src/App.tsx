import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordeon/Accordeon";
import {Rating, ValueType} from "./components/Rating/Rating";
import OnnOff from "./components/OnOff/OnOff";
import UnControlldAccordeon from "./components/UnControlledAccordeon/UnControlldAccordeon";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import UnControlledOnnOff from "./components/UnControlledOnOff/OnOff";



function App() {


    let [ratingValue, setRatingValue] = useState<ValueType>(3)
    let [colapsedAcordion, setColapsedAcordion] = useState<boolean>(false)
    let [SwichOnn, setSwichOnn] = useState(false)

function onChange ()  {  setSwichOnn(!SwichOnn)}
    return (

        <div className="App">
            <OnnOff on={SwichOnn}
                    ChangeStatus={onChange}/>

           <UnControlledOnnOff status={setSwichOnn}/>{SwichOnn.toString()}










            <Accordion collapsed={colapsedAcordion}
                       onChange={ () => {setColapsedAcordion(!colapsedAcordion)} }
                       titleValue={"MENU"}/>



            <Rating value={ratingValue}
                    onClick={setRatingValue}/>


            <UnControlldAccordeon titleValue={"Menu"}/>
            <UnControlldAccordeon titleValue={"Users"}/>

            <UnControlledRating/>
            { /*<Rating value={1}/>
            <Rating value={2}/>
            <Rating value={1}/>
            <Rating value={4}/>
            <Rating value={2}/>*/}

        </div>
    );
}

function PageTitle(props: any) {
    return (
        <div>{props.title}</div>
    )
}


export default App;
