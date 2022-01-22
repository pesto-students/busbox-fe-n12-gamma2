import React from "react"
import "./PrimaryButton.css"

export default function PrimaryButton(props){
    return(
        <div className="primary-button-wrapper">
            <span className="primary-button-text">{props.text}</span>
            <img className="primary-button-img" src={require('../../../icons/btn-arrow.png')}/>
        </div>
    )
}