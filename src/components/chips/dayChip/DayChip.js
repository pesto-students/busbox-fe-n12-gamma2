import React from "react"
import "./DayChip.css"

export default function DayChip(props){
    return(        
        <div onClick={() => props.onClick(props.name)} className={`chip ${props.className}`}>
            <span>{props.dayName}</span>
        </div>
    )
}