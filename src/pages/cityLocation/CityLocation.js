import React, {useState, useEffect } from 'react'
import LocationCard from '../../components/cards/locationCard/LocationCard'
import SecondaryButton from '../../components/buttons/secondaryButton/SecondaryButton'
import './CityLocation.css'
import Heading from '../../components/heading/Heading'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../../axios/api'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { dataActions } from '../../state/index'
import snackbar from '../../components/snackbar/snackbarUtils'

export default function CityLocation(props){
    const data = useSelector(state => state.data);
    const navigate = useNavigate();
    const [pickUpLocations, setPickupLocations] = useState([]);
    const [dropLocations, setDropLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState({
        selectedPickup : data.selectedPickup,
        selectedDrop : data.selectedDrop
    })
    const {setLocations} = bindActionCreators(dataActions,useDispatch())
    useEffect(() => {
        const sourceCityId = data?.sourceCity?.cityId;
        const destinationCityId = data?.destinationCity?.cityId;
        api.get('/buses/locations', { params: { cityId: sourceCityId }
        }).then(response => {
            console.log('output :: ',response)
            setPickupLocations(response?.data[0]?.locations);
            return api.get('/buses/locations', {params : {cityId: destinationCityId}})
        }).then(response => {
            console.log('second output :: ',response)
            setDropLocations(response?.data[0]?.locations);
        }).catch(error => console.error('output error :: ', error))
        
        // TODO :: handle api error and show error screen.
    }, [] );

    const selectPickupLocation = (index) => {
        setSelectedLocation(prev => ({
            ...prev, 
            selectedPickup : pickUpLocations[index]
        }))
    }

    const selectDropLocation = (index) => {
        setSelectedLocation(prev => ({
            ...prev, 
            selectedDrop : dropLocations[index]
        }))
    }

    const getPickupLocationCard = (location, index) => {
        return (
            <LocationCard
                key= {index}
                onClick = {selectPickupLocation}
                index = {index} 
                address = {`${location.locationName}, ${location.address}`}
                isSelected = {selectedLocation.selectedPickup?.address === pickUpLocations[index].address}
                //TODO :: handle departure time for each location 
            />
        )
    }
    const getDropLocationCard = (location, index) => {
        return (
            <LocationCard
                key= {index}
                onClick = {selectDropLocation}
                index = {index} 
                address = {`${location.locationName}, ${location.address}`}
                isSelected = {selectedLocation.selectedDrop?.address === dropLocations[index].address}
                //TODO :: handle departure time for each location 
            />
        )
    }

    const proceed = () => {
        if(!selectedLocation.selectedPickup) {
            return snackbar.error("Please select a pickup location")            
        } else if(!selectedLocation.selectedDrop){
            return snackbar.error("Please select a drop location");
        } 
        setLocations(selectedLocation)
        navigate('/buses/seats/locations/passengers')
    }

    return (
        <div className='city-location'>
            <div className='page-content'>
                <Heading text='Select Pick Up & Drop Point'/>
                <h5> Available Pickup Points </h5>
                    {pickUpLocations.map(getPickupLocationCard)}
                <h5> Available Drop Points </h5>
                    {dropLocations.map(getDropLocationCard)}
            </div>
            <SecondaryButton 
                text="Confirm & Proceed"
                onClick = {proceed}
                />
        </div>
    )
}