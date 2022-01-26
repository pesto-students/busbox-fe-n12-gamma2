import React from 'react'
import './VerifyDetails.css'
import Heading from '../../components/heading/Heading'
import SecondaryButton from '../../components/buttons/secondaryButton/SecondaryButton'
import Details from '../../components/details/Details'
import { useLocation } from 'react-router-dom'
import {getAllDetails, getLocationString} from './detailUtils'
import api from '../../axios/api'
import { useSelector } from 'react-redux'


export default function VerifyDetails(){

    const data = useSelector(state => state.data);
    console.log(data);
    const verificationData = getAllDetails(data);    
    
    const request =  { 
        busId: data?.selectedBus?.busId,
        selectedSeats: data?.selectedSeats,
        sourceCity: data?.sourceCity?.cityName,
        destinationCity: data?.destinationCity?.cityName,
        journeyDate: data?.userInputDate,
        pickupLocation: getLocationString(data?.selectedPickup),
        dropLocation: getLocationString(data?.selectedDrop),
        passengerDetails: data?.passengerDetails?.map(detail => ({...detail, age:Number.parseInt(detail.age)})),
        contactDetails: {email: data?.contactDetails?.email, phone: data?.contactDetails?.phoneNumber}
      }
    const proceed = () => {


        console.warn("Making Request With Data :-", request);

        api.post('/bookings/new', request)
        .then(result => {
            window.location.replace(result.data.url)
        }).catch(err => {
            console.err('eerr ::', err);
        })
    }

    return (
        <div className='verify-details'>
            <div className='page-content'>
                <Heading text='Verify All Details'/>
                <Details data={verificationData} />
            </div>
            <SecondaryButton onClick={proceed} text='Continue To Payment'/>
        </div>
    )
}