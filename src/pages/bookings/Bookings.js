import React, { useEffect, useState } from 'react'
import Heading from '../../components/heading/Heading'
import DropDown from 'react-dropdown'
import BoookingCard from '../../components/cards/bookingCard/BookingCard'
import './Bookings.css'
import api from '../../axios/api'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {dataActions} from '../../state/index'
import { bindActionCreators } from 'redux'
import moment from 'moment'

export default function Bookings (){
    const options = ['All Bookings', 'UpComing', 'Completed', 'Cancelled']
    const data = useSelector(state => state.data);
    const [allBookings, setBookings] = useState(data.bookings || [])
    const [bookingsToShow, setBookingsToShow] = useState(allBookings)
    const {setBookings: setInReduxBookings, setSelectedBooking} = bindActionCreators(dataActions, useDispatch())
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(true);
    useEffect(() => {
        api.get('/bookings/list').then(result => {
            setBookings(result.data)
            setInReduxBookings(result.data)
        }).catch(error => {
            console.error('error gaj', {...error})
            navigate('/error');
        })
    }, [refresh])

    const onRefresh = () => setRefresh(prev => !prev)

    const onSelectBooking = (index) => {
        const booking = allBookings[index];
        setSelectedBooking(booking)
        navigate('/bookings/details')
    }

    console.log('bookingstoshow', bookingsToShow);
    const onFilter = (event) => {
        console.log(event);
        const today = moment();
        switch (event.value.toLowerCase()) {
            case 'cancelled':
                const cancelledBookings = allBookings.filter(booking => booking?.bookingStatus?.trim()?.toLowerCase() === 'cancelled');
                setBookingsToShow(cancelledBookings)
                break;
            case 'upcoming':
                const upcomingBookings = allBookings.filter(booking => moment(booking.journeyDate, 'DD/MM/YYYY') > today);
                console.log('upcomingBookings', upcomingBookings);
                setBookingsToShow(upcomingBookings)
                break;
            case 'completed':
                const completedBookings = allBookings.filter(booking => moment(booking.journeyDate, 'DD/MM/YYYY') <= today);
                console.log('completedBookings', completedBookings);
                setBookingsToShow(completedBookings)
                break;
            default:
                setBookingsToShow(allBookings)
                break;
        }
    }


    const bookingCards = bookingsToShow.map((booking, index) => (
        <BoookingCard 
            key={index} 
            index={index}
            onClick={onSelectBooking}
            details={booking} 
        />
    ))

    return (
        <div className='page-content'>
            <div className='heading-line'> 
                <Heading text='Your Bookings'/>
                <img onClick={onRefresh} className='refresh' src={require('../../icons/refresh.png')}/>
            </div>
            <DropDown
                onChange={onFilter} 
                options={options}
                value={options[0]}
                arrowClosed={<img className='dropdown-icon' src={require('../../icons/chevron-down.png')}/>}
                arrowOpen={<img className='dropdown-icon' src={require('../../icons/chevron-up.png')}/>}
                controlClassName='dropdown-control'
                className='dropdown'
            />
            <div className='bookings-list'>
                {bookingCards.length <= 0 ? <h1 className='no-bookings'>No bookings to show</h1> : bookingCards}
            </div>
        </div>
    )
}