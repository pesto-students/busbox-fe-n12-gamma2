import React from "react"
import "./DayChip.css"

export default function DayChip(props){
    return(
        
            <div className="day-chip">
                <span>{props.dayName}</span>
            </div>
    )
}