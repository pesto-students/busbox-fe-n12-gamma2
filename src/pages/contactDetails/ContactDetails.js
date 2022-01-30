import React, { useState } from 'react'
import Heading from '../../components/heading/Heading'
import InputBox from '../../components/inputBox/InputBox'
import SecondaryButton from '../../components/buttons/secondaryButton/SecondaryButton'
import './ContactDetails.css'
import '../../App.css'
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { dataActions, snackbarActions } from '../../state/index'
import { isValidEmail } from '../commonUtils'
import snackbar from '../../components/snackbar/snackbarUtils'

export default function ContactDetails(){
    const navigate = useNavigate()
    const {setContactDetails: setInReduxContactDetails} = bindActionCreators(dataActions, useDispatch())
    const data = useSelector(state => state.data)
    const [contactDetails, setContactDetails] = useState(data.contactDetails || {
        email: '',
        phoneNumber: ''
    })  

    const handleEmailChange = (event) => {
        setContactDetails(prev => ({...prev, email : event.target.value}))
    }

    const handlePhoneChange = (event) => {
        const val = event.target.value;
        if(val.length <= 10)setContactDetails(prev => ({...prev, phoneNumber : event.target.value}))
    }
    
    const proceed = () => {
        if(!isValidEmail(contactDetails.email)){
            return snackbar.error('Please enter a valid email');
        }
        if(contactDetails.phoneNumber.length !== 10){
            return snackbar.error('Invalid Phone Number');
        }
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
                        onChange= {handleEmailChange}
                    />

                    <InputBox
                        name='phoneNumber'
                        value={contactDetails.phoneNumber}
                        inputType = 'number' 
                        placeholder="Phone Number"
                        icon={require("../../icons/phone.png")}
                        onChange={handlePhoneChange}
                    />
                    <p>Note : Booking Details will be sent to above email & phone</p>
                </div>
            </div>
            <SecondaryButton onClick={proceed} text="Confirm & Proceed"/>
        </div>
    )
}