import React from 'react'
import './BookingCard.css'
import StatusChip from '../../chips/statusChip/StatusChip'
import * as commonUtils from '../../../pages/commonUtils'
import moment from 'moment'
export default function BoookingCard (props) {
    const details = props.details;
    const journeyDate = moment(details.journeyDate,'DD/MM/YYYY');
    const today = moment();
    const isCancelled = details.bookingStatus.toLowerCase() === 'cancelled'
    const status = isCancelled ? 
            'cancelled'
        : journeyDate < today ?
            'completed'
        :   'upcoming'

        return (
        <div onClick={() => props.onClick(props.index)} className='booking-card'>
            <div className='row1'>
                <h3>{commonUtils.capitalize(details.sourceCity.cityName)}</h3>
                <img className='arrow-icon' src={require('../../../icons/arrow-right-blue.png')}/>
                <h3>{commonUtils.capitalize(details.destinationCity.cityName)}</h3>
            </div>
            <div className='row2'>
                <p>{moment(journeyDate, "DD/MM/YYYY").format('DD MMM YYYY')}</p>
                <StatusChip status={status}/>
                <p>{`${details.passengerDetails.length} Passenger(s)`}</p>
            </div>
            <div></div>
        </div>
    )
}