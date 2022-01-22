import React from "react"
import "./SecondaryButton.css"

export default function SecondaryButton(props){
    return(
        
            <div className="secondarybutton">
                <span className="btn-txt">{props.text}
                <img className="btn-img" src={require("../../../icons/btn-arrow.png")}/>
                </span>
            </div>
    )
}