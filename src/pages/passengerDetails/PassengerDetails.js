import React, { useState } from 'react'
import InputBox from "../../components/inputBox/InputBox";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import Heading from "../../components/heading/Heading";
import "./PassengerDetails.css"
import Passenger from '../../components/passenger/Passenger';
import { useLocation, useNavigate } from 'react-router-dom';
import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@mui/material';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import {dataActions} from '../../state/index'

export default function PasssengerDetails(){
    const state = useLocation().state;
    const navigate = useNavigate();
    const {setPassengerDetails} = bindActionCreators(dataActions, useDispatch())
    const [passengers, setPassengers] = useState([]);
    const [detail, setDetail] = useState({
        name : '',
        age : '',
        gender : ''
    });

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target;
        setDetail(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }
    
    const addPassenger = () => {
        setPassengers(prev =>[...prev, detail])
        setDetail(prevDetail => {
            return {...prevDetail, name: '', age: ''}
        })
    }

    const deletePassenger = (index) => {
        console.log('deletePassenger, called', index);
        setPassengers(prev => {
            prev.splice(index, 1)
            return [...prev] 
        })
    }

    const passengerComponents = passengers.map((passenger, index) => {
        return (
            <Passenger 
                key={index}
                name={passenger.name}
                age={passenger.age}
                gender={passenger.gender}
                id={index}
                deletePassenger={deletePassenger}
            />
        )
    })

    const proceed = () => {
        setPassengerDetails(passengers)
        navigate('/buses/seats/locations/passengers/contact')
    }

    return(
        <div className="passenger-details">
            <div className="page-content passenger-details-content">
                <Heading text="Provide Passenger Details" />
                <div className='card'>
                    <InputBox
                        name = 'name'
                        value={detail.name}
                        inputType = 'text' 
                        placeholder="Passenger Name"
                        icon={require("../../icons/profile.png")}
                        onChange = {handleChange}
                    />

                    <InputBox
                        name = 'age'
                        value={detail.age}
                        inputType = 'number' 
                        placeholder="Passenger Age"
                        icon={require("../../icons/passenger-age.png")}
                        onChange = {handleChange}
                    />

                <FormControl className='gender'>
                    <FormLabel className='gender-label' id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        className='gender-buttons'
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="gender"
                        row
                        value={detail.gender}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                </div>
            
                <div onClick={addPassenger} className='add-pasenger-button'>
                    <h2>+</h2> <h3>Add Passenger</h3>
                </div>
            
                {passengerComponents}
            </div>
            
            <SecondaryButton onClick={proceed} text="Confirm & Proceed"/>
        </div>     
    )
}