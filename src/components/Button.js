import React from 'react';
import "../css/button.css";
import "../css/buttonboard.css";


export default function Button(props){
    return(
        <button className={`button ${props.className}`}>{props.value}</button>
    )
}