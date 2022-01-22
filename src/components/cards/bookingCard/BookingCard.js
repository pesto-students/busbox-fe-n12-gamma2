import React from 'react'
import './BookingCard.css'
import StatusChip from '../../chips/statusChip/StatusChip'

export default function BoookingCard (props) {
    return (
        <div className='booking-card'>
            <div className='row1'>
                <h3>Banglore</h3>
                <img className='arrow-icon' src={require('../../../icons/arrow-right-blue.png')}/>
                <h3>Chennai</h3>
            </div>
            <div className='row2'>
                <p>28 Dec 2021</p>
                <StatusChip status={props.status}/>
                <p>A/C Sleeper (2+1)</p>
            </div>
            <div></div>
        </div>
    )
}