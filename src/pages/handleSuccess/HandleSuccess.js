import React, { useEffect, useState } from 'react'
import './HandleSuccess.css'
import api from '../../axios/api'
import { bindActionCreators } from 'redux'
import { dataActions } from '../../state/index'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function HandleSuccess(props){
    const [ready, setReady] = useState(false);

    const params = useParams();
    const bookingId = params?.bookingId;
    const {setBookings, setSelectedBooking, resetData} = bindActionCreators(dataActions, useDispatch());
    const navigate = useNavigate();
    useEffect( () => {
        api.get(`/bookings/${bookingId}`).then(result => {
            if(!result?.data?.customerBookings) return;
            resetData();
            console.log(result.data.customerBookings);
            setBookings(result.data.customerBookings);
            console.log(bookingId);
            const currentBooking = result.data.customerBookings.filter(b => b.bookingId === bookingId);
            console.log('currentBooking', currentBooking);
            setSelectedBooking(currentBooking[0]);
            setReady(true);
        }).catch(e => {
            console.error('ERROR: ', e.message);
            navigate('/error');
        })
    },[])

    return (
        <div>
            Checking All Details...
            {ready && <Navigate to='/bookings/details'/>}
        </div>
    )
}