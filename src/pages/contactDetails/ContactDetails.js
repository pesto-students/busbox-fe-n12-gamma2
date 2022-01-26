import React, { useState } from 'react'
import Heading from '../../components/heading/Heading'
import InputBox from '../../components/inputBox/InputBox'
import SecondaryButton from '../../components/buttons/secondaryButton/SecondaryButton'
import './ContactDetails.css'
import '../../App.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import {dataActions} from '../../state/index'

export default function ContactDetails(){
    const navigate = useNavigate()
    const {setContactDetails: setInReduxContactDetails} = bindActionCreators(dataActions, useDispatch())
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
        setInReduxContactDetails(contactDetails)
        navigate('/buses/seats/locations/passengers/contact/verify')
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
            <SecondaryButton onClick={proceed} text="Confirm & Proceed"/>
        </div>
    )
}