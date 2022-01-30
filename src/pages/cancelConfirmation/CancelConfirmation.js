import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import Heading from "../../components/heading/Heading";
import InputBox from "../../components/inputBox/InputBox";
import { dataActions } from "../../state";
import './CancelConfirmation.css';

export default function CancelConfirmation(){
    const {setBookings} = bindActionCreators(dataActions, useDispatch())

    useEffect(() => {
        setBookings([]);
    }, [])

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