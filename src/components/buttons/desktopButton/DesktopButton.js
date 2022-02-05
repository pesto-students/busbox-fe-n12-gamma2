import React from "react"
import "./DesktopButton.css"

export default function DesktopButton(props){
    return(
        <div className="desktop-button-wrapper" onClick={props.onClick}>
            <span className="desktop-button-text">{props.text}</span>
            <img className="desktop-button-img" src={require('../../../icons/btn-arrow.png')}/>
        </div>
    )
}