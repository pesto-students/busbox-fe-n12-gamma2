import React from 'react'
import './VerifyDetails.css'
import Heading from '../../components/heading/Heading'
import SecondaryButton from '../../components/buttons/secondaryButton/SecondaryButton'
import Details from '../../components/details/Details'
import { useLocation } from 'react-router-dom'
import {getAllDetails, getLocationString} from './detailUtils'
import api from '../../axios/api'


export default function VerifyDetails(){

    const state = useLocation().state;
    console.log(state);
    const data = getAllDetails(state);
    
    
    const request =  { 
        busId: state?.selectedBus?.busId,
        selectedSeats: state?.selectedSeats,
        sourceCity: state?.route?.sourceCity?.cityName,
        destinationCity: state?.route?.destinationCity?.cityName,
        journeyDate: state?.route?.date,
        pickupLocation: getLocationString(state?.selectedLocation?.selectedPickup),
        dropLocation: getLocationString(state?.selectedLocation?.selectedDrop),
        passengerDetails: state?.passengerDetails?.map(detail => ({...detail, age:Number.parseInt(detail.age)})),
        contactDetails: {...state?.contactDetails, phone: state?.contactDetails?.phoneNumber}
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
                <Details data={data} />
            </div>
            <SecondaryButton onClick={proceed} text='Continue To Payment'/>
        </div>
    )
}