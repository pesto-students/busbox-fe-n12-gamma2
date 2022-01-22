import './Passenger.css'
import React from 'react'

export default function Passenger(props){
    return (
        <div className='passenger'>
            <img className='passenger-icon' src={require("../../icons/profile.png")}/>
            <p>Gajanan Patil</p>
            <p>25</p>
            <p>Male</p>
            <img className='close-icon' src={require("../../icons/close.png")}/>
        </div>
    )
}