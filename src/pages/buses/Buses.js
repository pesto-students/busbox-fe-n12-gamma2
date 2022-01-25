import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BusCard from '../../components/cards/busCard/BusCard'
import './Buses.css'

export default function Buses(){
    const navigate = useNavigate();
    const location = useLocation();
    const route = location.state.route;
    const buses = location.state.buses;

    const selectBus = (busId) => {
        const selectedBus = buses.filter(bus => bus.busId === busId)[0];
        const sourceCity = selectedBus.busRoute.filter(city => city.cityName === route.sourceCity)[0];
        const destinationCity = selectedBus.busRoute.filter(city => city.cityName === route.destinationCity)[0];
        
        navigate('/seat-layout', {
            state: { ...location.state,
                selectedBus,
                route: {...route, sourceCity, destinationCity}
            }
        })
    }

    const busCards = buses.map((bus, index) =>
        <BusCard 
            key={index} 
            bus={bus} 
            sourceCityName={route.sourceCity}
            destinationCityName={route.destinationCity}
            onClick={selectBus}
        />
    );
    return (
        <div className='buses'>
            {
                (buses.length > 0)  &&  busCards
            }
        </div>
    )
}