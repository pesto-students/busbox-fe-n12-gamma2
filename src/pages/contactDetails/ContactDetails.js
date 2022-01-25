import React, { useState } from 'react'
import Heading from '../../components/heading/Heading'
import InputBox from '../../components/inputBox/InputBox'
import SecondaryButton from '../../components/buttons/secondaryButton/SecondaryButton'
import './ContactDetails.css'
import '../../App.css'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ContactDetails(){
    const state = useLocation().state;
    const navigate = useNavigate()
    const [contactDetails, setContactDetails] = useState({
        email: '',
        phoneNumber: ''
    })  

    const handleChange = (event) => {
        setContactDetails(prev => {
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }
    
    const proceed = () => {
        navigate('/verify-details',{
            state: {
                ...state,
                contactDetails
            }
        })
    }

    return (
        <div className='contact-details'>
            <div className='page-content contact-details-content'>
                <Heading text="Provide Contact Details" />
                <div className='contact-detail-card'>
                    <InputBox
                        name = 'email'
                        value = {contactDetails.email}
                        inputType = 'text' 
                        placeholder="E-Mail"
                        icon={require("../../icons/email.png")}
                        onChange= {handleChange}
                    />

                    <InputBox
                        name='phoneNumber'
                        value={contactDetails.phoneNumber}
                        inputType = 'number' 
                        placeholder="Phone Number"
                        icon={require("../../icons/phone.png")}
                        onChange={handleChange}
                    />
                    <p>Note : Booking Details will be sent to above email & phone</p>
                </div>
            </div>
            <SecondaryButton onClick={proceed} text="Confirn & Proceed"/>
        </div>
    )
}