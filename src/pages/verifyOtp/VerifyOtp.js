import React, { useState } from 'react'
import InputBox from "../../components/inputBox/InputBox";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import Heading from "../../components/heading/Heading";
import './VerifyOtp.css'
import api from '../../axios/api';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DesktopButton from '../../components/buttons/desktopButton/DesktopButton'
import useIsDesktop from '../../customHooks/useIsDesktop'

export default function VerifyOtp(){
    const isDesktop = useIsDesktop();
    const [otp, setOtp] = useState('');
    const selectedBooking = useSelector(state => state.data.selectedBooking)
    const email = useSelector(state => state.auth.email);
    const bookingId = selectedBooking.bookingId
    const navigate = useNavigate();
    const handleChange = (event) => {
        setOtp(event.target.value)
    }
    const confirm = () => {
        api.post('/bookings/cancel/confirm', {bookingId, otp}).then(result => {
            if(result.status === 200){
                navigate('/cancel-confirmation');
            }
        })
    }
    return(
        <div className="verify-otp">
            <div className="page-content">
                <Heading text="Cancel the booking" />
                <div className='verify-otp-card'>
                    <p>{`A confirmation code has been sent to ${email}. Enter that code below to confirm the cancellation.`}</p>
                    
                    <InputBox
                        inputType = 'number'
                        name = 'otp'
                        value = {otp}
                        onChange={handleChange} 
                        placeholder="Confirmation Code"
                        icon={require("../../icons/lock.png")}
                    />
                </div>

            </div>
            {isDesktop && 
                    <div className='verify-otp-proceed-button-container'> 
                        <DesktopButton text="Confirm & Cancel" onClick = {confirm}/> 
                    </div>
                }
            {!isDesktop && <SecondaryButton text="Confirm & Cancel" onClick = {confirm}/>}
        </div>     
    )
}