import React from "react";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import Heading from "../../components/heading/Heading";
import InputBox from "../../components/inputBox/InputBox";
import './CancelBooking.css';

export default function CancelBooking(){
    return (
        <div className="cancel-booking">
            <div className="page-content">
                <Heading text='Cancel this booking'/>
                <div className="cancel-booking-card">
                    <p>A confirmation code has been sent to patilgajanan1807@gmail.com. Enter the code below to confirm the cancellation.</p>
                    <InputBox placeholder='Confirmation Code'icon={require('../../icons/lock.png')}/>
                </div>
            </div>
            <SecondaryButton text='Confirm & Cancel'/>
        </div>
    )
}