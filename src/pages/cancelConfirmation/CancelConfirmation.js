import React from "react";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import Heading from "../../components/heading/Heading";
import InputBox from "../../components/inputBox/InputBox";
import './CancelConfirmation.css';

export default function CancelConfirmation(){
    return (
        <div className="cancel-confirmation">
            <div className="page-content">
                <Heading text='Booking Cancelled'/>
                <div className="cancel-confirmation-card">
                    <p>Your booking has been cancelled successfully.</p>
                </div>
            </div>
            <SecondaryButton text='Return Home'/>
        </div>
    )
}