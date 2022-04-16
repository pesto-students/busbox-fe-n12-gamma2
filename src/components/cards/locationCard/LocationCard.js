import React from "react"
import "./LocationCard.css"

export default function LocationCard(props){

    const icon = props.isSelected 
        ? require("../../../icons/checkbox-checked.png") 
        : require("../../../icons/checkbox-unchecked.png") 

    return(
        <div onClick={() => props.onClick(props.index)} className="location-card"> 
            <div className="location-card-address"> 
                <p>{props.address}</p>
                <img className="input-icon" src={icon} />
            </div>

            <div className="location-card-time">
                <img className="clock-icon" src={require("../../../icons/clock.png")} />
                <p>{props.timeDetail.text}  </p>
                <span>{props.timeDetail.value}  </span>
            </div>

        </div>
)
}