import React from 'react'
import InputBox from "../../components/inputBox/InputBox";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import Heading from "../../components/heading/Heading";
import "./PassengerDetails.css"
import Passenger from '../../components/passenger/Passenger';

export default function PasssengerDetails(){
    return(
        <div className="passenger-details">
            <div className="page-content passenger-details-content">
                <Heading text="Provide Passenger Details" />
                <div className='card'>
                    <InputBox
                        inputType = 'text' 
                        placeholder="Passenger Name"
                        icon={require("../../icons/profile.png")}
                        />

                    <InputBox
                        inputType = 'text' 
                        placeholder="Passenger Age"
                        icon={require("../../icons/passenger-age.png")}
                        />

                    <div className="gender">
                        <h3>Gender:-</h3>
                        <div>
                            <input name='gender' type = 'radio' id="male" value="Male"/>
                            <label htmlFor='male'>Male</label>
                        </div>
                    
                        <div>
                            <input name='gender' type = 'radio' id="female" value="Female"/>
                            <label htmlFor='female'>Female</label>
                        </div>
                    
                        <div>
                            <input name='gender' type = 'radio' id="other" value="Other"/>
                            <label htmlFor='other'>Other</label>
                        </div>
                    </div>
                </div>
                <span className='add-passenger'>+ Add new passenger </span>
            <Passenger />
            <Passenger />
            </div>
            
            <SecondaryButton text="Confirn & Proceed"/>
        </div>     
    )
}