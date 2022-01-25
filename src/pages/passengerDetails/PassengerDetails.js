import React, { useState } from 'react'
import InputBox from "../../components/inputBox/InputBox";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import Heading from "../../components/heading/Heading";
import "./PassengerDetails.css"
import Passenger from '../../components/passenger/Passenger';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PasssengerDetails(){
    const state = useLocation().state;
    const navigate = useNavigate();

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

    console.log(passengers);
    console.log(detail);


    
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
        navigate('/contact-details',{
            state : {
                ...state,
                passengerDetails : passengers
            }
        })        
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

                    <div className="gender">
                        <h3>Gender:-</h3>
                        <div>
                            <input onChange={handleChange} name='gender' type = 'radio' id="male" value="Male"/>
                            <label htmlFor='male'>Male</label>
                        </div>
                    
                        <div>
                            <input onChange={handleChange} name='gender' type = 'radio' id="female" value="Female"/>
                            <label htmlFor='female'>Female</label>
                        </div>
                    
                        <div>
                            <input onChange={handleChange} name='gender' type = 'radio' id="other" value="Other"/>
                            <label htmlFor='other'>Other</label>
                        </div>
                    </div>
                </div>
            
                <div onClick={addPassenger} className='add-pasenger-button'>
                    <h2>+</h2> <h3>Add Passenger</h3>
                </div>
            
                {passengerComponents}
            </div>
            
            <SecondaryButton onClick={proceed} text="Confirn & Proceed"/>
        </div>     
    )
}