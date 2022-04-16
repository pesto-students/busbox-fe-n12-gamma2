import './Passenger.css'
import React from 'react'

export default function Passenger(props){
    return (
        <div className='passenger'>
            <img className='passenger-icon' src={require("../../icons/profile.png")}/>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.gender}</p>
            <img onClick={() => props.deletePassenger(props.id)} className='close-icon' src={require("../../icons/close.png")}/>
        </div>
    )
}