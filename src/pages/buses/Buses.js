import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {dataActions} from '../../state/index'
import BusCard from '../../components/cards/busCard/BusCard'
import Heading from '../../components/heading/Heading'
import './Buses.css'

export default function Buses(){
    const navigate = useNavigate();
    const data = useSelector(state => state.data)
    const {setSelectedBus, setBusRoute, setSelectedSeats} = bindActionCreators(dataActions, useDispatch())

    const sourceCityName = data.userInputSourceCity;
    const destinationCityName = data.userInputDestinationCity;
    const buses = data.buses;

    const selectBus = (busId) => {
        const selectedBus = buses.filter(bus => bus.busId === busId)[0];
        const sourceCity = selectedBus.busRoute.filter(city => city.cityName === sourceCityName)[0];
        const destinationCity = selectedBus.busRoute.filter(city => city.cityName === destinationCityName)[0];
        
        setSelectedBus(selectedBus),
        setSelectedSeats([])
        setBusRoute({sourceCity, destinationCity})
        navigate('/buses/seats')
    }

    const busCards = buses.map((bus, index) =>
        <BusCard 
            key={index} 
            bus={bus} 
            sourceCityName={sourceCityName}
            destinationCityName={destinationCityName}
            onClick={selectBus}
        />
    );
    return (
        <div className='buses'>
            <Heading text='Select a bus'/>
            {
                (buses.length > 0)  &&  busCards
            }
        </div>
    )
}