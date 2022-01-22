import React from "react"
import "./LocationCard.css"

export default function LocationCard(){
    return(
        <div className="location-card"> 

            <div className="location-card-address"> 
                <p>321st Main Street, In front of National School, Near the Hanuman Temple, Bengaluru, Karnataka, 560043</p>
                <img className="input-icon" src={require("../../../icons/checkbox-checked.png")} />
            </div>

            <div className="location-card-time">
                <img className="clock-icon" src={require("../../../icons/clock.png")} />
                <p>DEPARTURE TIME  </p>
                <span>08:30 PM  </span>
            </div>

        </div>
)
}