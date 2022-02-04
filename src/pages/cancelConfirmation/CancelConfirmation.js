import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import Heading from "../../components/heading/Heading";
import InputBox from "../../components/inputBox/InputBox";
import { dataActions } from "../../state";
import './CancelConfirmation.css';
import DesktopButton from '../../components/buttons/desktopButton/DesktopButton';
import useIsDesktop from '../../customHooks/useIsDesktop';
import { useNavigate } from "react-router-dom";

export default function CancelConfirmation(){
    const isDesktop = useIsDesktop();
    const {setBookings} = bindActionCreators(dataActions, useDispatch())
    const navigate = useNavigate();
    useEffect(() => {
        setBookings([]);
    }, [])

    const goHome = () => {
        navigate('/');
    }
    return (
        <div className="cancel-confirmation">
            <div className="page-content">
                <Heading text='Booking Cancelled'/>
                <div className="cancel-confirmation-card">
                    <p>Your booking has been cancelled successfully.</p>
                </div>
            </div>

            {isDesktop && 
                <div className='cancel-proceed-button-container'> 
                    <DesktopButton onClick={goHome} text="Return Home" /> 
                </div>
                }
                {!isDesktop && <SecondaryButton onClick={goHome} text="Return Home"/>}

            {/* <SecondaryButton text='Return Home'/> */}
        </div>
    )
}