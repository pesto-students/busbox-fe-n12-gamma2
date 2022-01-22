import React from 'react'
import LocationCard from '../../components/cards/locationCard/LocationCard'
import SecondaryButton from '../../components/buttons/secondaryButton/SecondaryButton'
import './CityLocation.css'
import Heading from '../../components/heading/Heading'

export default function CityLocation(){
    return (
        <div className='city-location'>
            <div className='page-content'>
                <Heading text='Select Pick Up & Drop Point'/>
                <h5> Available Pickup Points </h5>                
                <LocationCard/>
                <LocationCard/>
                <LocationCard/>
                <h5> Available Drop Points </h5>                
                <LocationCard/>
                <LocationCard/>
                <LocationCard/>
            </div>
            <SecondaryButton text="Confirm & Proceed"/>
        </div>
    )
}