import React from 'react'
import Heading from '../../components/heading/Heading'
import DropDown from 'react-dropdown'
import BoookingCard from '../../components/cards/bookingCard/BookingCard'
import './Bookings.css'

function Bookings (){
    const options = ['All Bookings', 'UpComing', 'Completed', 'Cancelled']
    return (
        <div className='page-content'>
            <Heading text='Your Bookings'/>
            <DropDown 
                options={options}
                value={options[0]}
                arrowClosed={<img className='dropdown-icon' src={require('../../icons/chevron-down.png')}/>}
                arrowOpen={<img className='dropdown-icon' src={require('../../icons/chevron-up.png')}/>}
                controlClassName='dropdown-control'
                className='dropdown'
            />
            <div className='bookings-list'>
                <BoookingCard status='upcoming'/>
                <BoookingCard status='completed'/>
                <BoookingCard status='cancelled'/>
            </div>
        </div>
    )
}

export default Bookings;