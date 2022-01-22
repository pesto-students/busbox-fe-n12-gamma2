import React from 'react'
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/buttons/primaryButton/PrimaryButton';
import InputBox from '../../components/inputBox/InputBox';
import DayChip from '../../components/chips/dayChip/DayChip';
import Heading from '../../components/heading/Heading';
import "./Home.css" 

export default function Home(){
    return(
        <div className="home-page">
            <Heading text="Search for a Bus"/>
            <InputBox 
                inputType="text" 
                placeholder="Source City" 
                icon={require("../../icons/city.png")}
            />
            <img src={require("../../icons/city-swap.png")}/>
            <InputBox 
                inputType="text" 
                placeholder="Destination City" 
                icon={require("../../icons/city.png")}
            />
            
            <InputBox 
                inputType="text" 
                placeholder="Choose from calender" 
                icon={require("../../icons/calender.png")}
            />
            <div className="pick-a-day">
                <DayChip dayName="Today"/>
                <DayChip  dayName="Tomorrow"/>
            </div>
            <Link to="/seatlayout">
                <PrimaryButton 
                    text="Search Buses" 
                    icon={require("../../icons/btn-arrow.png")}
                />
            </Link>
        </div>
    )
}