import React from 'react'
import Heading from '../../components/heading/Heading'
import InputBox from '../../components/inputBox/InputBox'
import SecondaryButton from '../../components/buttons/secondaryButton/SecondaryButton'
import './ContactDetails.css'
import '../../App.css'

export default function ContactDetails(){
    return (
        <div className='contact-details'>
            <div className='page-content contact-details-content'>
                <Heading text="Provide Contact Details" />
                <div className='contact-detail-card'>
                    <InputBox
                        inputType = 'text' 
                        placeholder="E-Mail"
                        icon={require("../../icons/email.png")}
                        />

                    <InputBox
                        inputType = 'text' 
                        placeholder="Phone Number"
                        icon={require("../../icons/phone.png")}
                        />
                    <p>Note : Booking Details will be sent to above email & phone</p>
                </div>
            </div>
            <SecondaryButton text="Confirn & Proceed"/>
        </div>
    )
}