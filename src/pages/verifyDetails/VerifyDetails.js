import React from 'react'
import './VerifyDetails.css'
import Heading from '../../components/heading/Heading'
import SecondaryButton from '../../components/buttons/secondaryButton/SecondaryButton'
import Details from '../../components/details/Details'
import { useLocation, useNavigate } from 'react-router-dom'
import {getAllDetails, getLocationString} from './detailUtils'
import api from '../../axios/api'
import { useSelector } from 'react-redux'
import snackbar from '../../components/snackbar/snackbarUtils'
import DesktopButton from '../../components/buttons/desktopButton/DesktopButton'
import useIsDesktop from '../../customHooks/useIsDesktop'



export default function VerifyDetails(){
    
    const isDesktop = useIsDesktop();
    const state = useSelector(state => state)
    const data = state.data;
    const auth = state.auth;
    
    const verificationData = getAllDetails(data);    
    const navigate = useNavigate();
    const request =  { 
        busId: data?.selectedBus?.busId,
        busType: data?.selectedBus?.busType,
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
        if(!auth.email){
            snackbar.warning('Please Sign In First.');
            navigate('/signin', {state: {redirectBackTo: '/buses/seats/locations/passengers/contact/verify'}})
        } else {
            api.post('/bookings/new', request)
            .then(result => {
                window.location.replace(result.data.url)
            }).catch(err => {
                console.error('eerr ::', err);
            })
        }
    }
    
    return (
        <div className='verify-details'>
            <div className='page-content'>
                <Heading text='Verify All Details'/>
                <Details data={verificationData} />
            </div>
            {isDesktop && 
                <div className='verify-details-proceed-button-container'> 
                    <DesktopButton text="Confirm & Proceed" onClick = {proceed}/> 
                </div>
            }
            {!isDesktop && <SecondaryButton text="Confirm & Proceed" onClick = {proceed}/>}
        </div>
    )
}