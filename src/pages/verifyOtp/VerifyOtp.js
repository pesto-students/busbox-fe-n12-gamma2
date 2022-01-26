import React from 'react'
import InputBox from "../../components/inputBox/InputBox";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import Heading from "../../components/heading/Heading";
import './VerifyOtp.css'

export default function VerifyOtp(){
    return(
        <div className="verify-otp">
            <div className="page-content">
                <Heading text="Cancel the booking" />
                <div className='verify-otp-card'>
                    <p>A confirmation code has been sent to patilgajanan1807@gmail.com. Enter that code below to confirm the cancellation.</p>
                    
                    <InputBox
                        inputType = 'text' 
                        placeholder="Confirmation Code"
                        icon={require("../../icons/lock.png")}
                        />
                </div>

            </div>
            
            <SecondaryButton text="Confirm & Cancel"/>

        </div>     
    )
}