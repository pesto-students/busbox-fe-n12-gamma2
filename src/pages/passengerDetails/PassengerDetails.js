import React, { useState } from 'react'
import InputBox from "../../components/inputBox/InputBox";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import Heading from "../../components/heading/Heading";
import "./PassengerDetails.css"
import Passenger from '../../components/passenger/Passenger';
import { useNavigate } from 'react-router-dom';
import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@mui/material';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import {dataActions} from '../../state/index'
import snackbar from '../../components/snackbar/snackbarUtils'

export default function PasssengerDetails(){
    const navigate = useNavigate();
    const {setPassengerDetails} = bindActionCreators(dataActions, useDispatch())
    const data = useSelector(state => state?.data);
    const rflSeats = data.selectedBus.seatLayout.reservedForLadiesSeats;
    console.log(data);
    const [passengers, setPassengers] = useState(data.passengerDetails || []);

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
        console.log(detail);
        window.detail = detail;
        if(!detail.name.trim()){
            return snackbar.error('Enter name of the passenger');
        }
        const age = Number.parseInt(detail.age)
        
        if(Number.isNaN(age) || age <= 0 || age >= 100){
            return snackbar.error('Invalid Age');
        }

        if(!detail.gender){
            return snackbar.error('Select a Gender');
        }

        const seats = data.selectedSeats.length;

        if(passengers.length >= seats){
            return snackbar.error(`Selected Seats are ${seats}\nMust add EXACTLY ${seats} passenger(s)`);
        }
        setPassengers(prev =>[...prev, detail])
        
        setDetail( {gender: '', name: '', age: ''})
    }

    const deletePassenger = (index) => {
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
        const seats = data.selectedSeats.length;
        if( seats != passengers.length){
            return snackbar.error(`Selected Seats are ${seats}\nMust add EXACTLY ${seats} passenger(s)`);
        }
        const numberOfRFLSeats = data.selectedSeats.filter(seat => rflSeats.includes(seat)).length;
        const numberOfFemalePassengers = passengers.filter(passenger => passenger.gender.toLowerCase() === 'female').length;

        if (numberOfFemalePassengers < numberOfRFLSeats) {
            return snackbar.error(`${numberOfRFLSeats} Reserved for ladies seat selected\nMust add ${numberOfRFLSeats} Female passenger(s)`);
        }

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
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
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