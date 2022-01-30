import React, { useEffect, useState } from 'react'
import './HandleSuccess.css'
import api from '../../axios/api'
import { bindActionCreators } from 'redux'
import { dataActions } from '../../state/index'
import { Navigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'



export default function HandleSuccess(props){
    const [ready, setReady] = useState(false);

    const params = useParams();
    const {setBookings, setSelectedBooking} = bindActionCreators(dataActions, useDispatch());

    useEffect( () => {
        api.get(`/bookings/${params.bookingId}`).then(result => {
            if(! result?.data?.customerBookings) return ;
            setBookings(result.data.customerBookings)
            setSelectedBooking(result.data.customerBookings.filter(b => b.bookingId === params.bookingId)[0])
            setReady(true);
        }).catch(e => {
            console.error('ERROR: ', e.message);
        })
    },[])


    return (
        <div>
            Checking All Details...
            {ready && <Navigate to='/bookings/details'/>}
        </div>
    )
}











