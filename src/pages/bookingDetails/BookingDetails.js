import React from 'react'
import TertiaryButton from '../../components/buttons/tertiaryButton/TertiaryButton'
import Heading from '../../components/heading/Heading'
import './BookingDetails.css'
import dummyData from '../../dummyData'
import Details from '../../components/details/Details'

export default function BookingDetails(){
    return (
        <div className='booking-details'>
            <div className='page-content'>
                <Heading text='Booking Details'/>
                <Details data={dummyData}/>
                <h3 className='cancel'>Cancel this Booking?</h3>
            </div>
            <div className='button-container'>
                <div>
                    <TertiaryButton text='Download'/>
                </div>
                <div>
                    <TertiaryButton text='E-Mail Me'/>
                </div>
            </div>
        </div>
    )
}