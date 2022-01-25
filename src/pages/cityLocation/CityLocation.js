import React, {useState, useEffect } from 'react'
import LocationCard from '../../components/cards/locationCard/LocationCard'
import SecondaryButton from '../../components/buttons/secondaryButton/SecondaryButton'
import './CityLocation.css'
import Heading from '../../components/heading/Heading'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../../axios/api'
import {Snackbar, Alert} from '@mui/material'

export default function CityLocation(props){
    const state = useLocation().state;
    const navigate = useNavigate();
    const [snackbar, setSnackbar] = useState({
        open : false, 
        message : "",
        type: ''
    });
    const [pickUpLocations, setPickupLocations] = useState([]);
    const [dropLocations, setDropLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState({
        selectedPickup : undefined,
        selectedDrop : undefined
    })

    useEffect(() => {
        const sourceCityId = state?.route?.sourceCity?.cityId;
        const destinationCityId = state?.route?.destinationCity?.cityId;
        api.get('/buses/locations', {
            params: {
                cityId: sourceCityId
            }
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
                isSelected = {selectedLocation.selectedPickup?._id === pickUpLocations[index]._id}
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
                isSelected = {selectedLocation.selectedDrop?._id === dropLocations[index]._id}
                //TODO :: handle departure time for each location 
            />
        )
    }

    const proceed = () => {
        console.log('inside proced')
        console.log(selectedLocation.selectedPickup)
        if(!selectedLocation.selectedPickup) {
            console.log('inside if')
            setSnackbar({
                open: true,
                message : "Please select a pickup location",
                type: 'error'
            })
            return;
        } else if(!selectedLocation.selectedDrop){
            setSnackbar({
                open: true,
                message : "Please select a drop location",
                type: 'error'
            })
            return;
        } 

        navigate('/passenger-details', {
            state : {
                ...state, 
                selectedLocation
            }
        })

    }

    const closeSnackbar = () => {
        setSnackbar({ open : false, message: '', type: '' })
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
            <Snackbar 
                open={snackbar.open} 
                autoHideDuration={3500}
                onClose={closeSnackbar}
                message = {snackbar.message}
                anchorOrigin={{vertical: 'top', horizontal:'right'}}
            > 
                <Alert onClose={closeSnackbar} severity={snackbar.type} sx={{ width: '70%' }}>
                    {snackbar.message}
                    </Alert>
            </Snackbar>
        </div>
    )
}