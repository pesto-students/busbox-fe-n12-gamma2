import React from 'react'
import './StatusChip.css'

export default function StatusChip(props) {
    const text = props.status.toLowerCase() === 'upcoming'
                    ? "Up Coming"
                    : props.status.toLowerCase() === 'completed'
                    ? "Completed"
                    : props.status.toLowerCase() === "cancelled"
                    ? "Cancelled"
                    : "Unknown"
    return(
        <p className={`status-chip ${props.status}`}>{text}</p>
    )
}