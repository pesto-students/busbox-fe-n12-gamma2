import React, { useState } from 'react'
import InputBox from "../../components/inputBox/InputBox";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import Heading from "../../components/heading/Heading";
import './VerifyEmail.css'
import api from '../../axios/api';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import snackbar from '../../components/snackbar/snackbarUtils';
import DesktopButton from '../../components/buttons/desktopButton/DesktopButton'
import useIsDesktop from '../../customHooks/useIsDesktop'

export default function VerifyEmail(){
    const isDesktop = useIsDesktop();
    const [otp, setOtp] = useState('');
    const data = useSelector(state => state.auth.signupData);
    const navigate = useNavigate();
    const redirectBackTo = useLocation().state?.redirectBackTo;

    const handleChange = (event) => {
        setOtp(event.target.value)
    }

    const confirm = () => {
        api.post('/auth/signup', {...data, otp}).then(result => {
            console.log(result.status);
            if(result.status === 201){
                snackbar.success('Account Created! redirecting to SignIn page');
                navigate('/signin', {state: {redirectBackTo}})
            }
        })
    }

    return(
        <div className="verify-otp">
            <div className="page-content">
                <Heading text="Verify Your E-Mail Address" />
                <div className='verify-otp-card'>
                    <p>
                        {`An E-Mail verification code has been sent to ${data.email}. Enter that code below to confirm your email.`}
                    </p>
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
                <div className='verify-email-button-container'> 
                    <DesktopButton text="Validate E-Mail" onClick = {confirm}/> 
                </div>
                }
                {!isDesktop && <SecondaryButton text="Validate E-Mail" onClick = {confirm}/>}
        </div> 
    )
}