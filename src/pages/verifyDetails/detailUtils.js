const getLocationString = (location) => {
    return `${location?.locationName}, ${location?.address}` 
}

const getPassengerString = (passenger) => {
    return `${passenger.name} ${passenger.gender.charAt(0)} ${passenger.age}`
}

const getAllDetails = (state) => {
    let details = [];

    details.push({key: 'Source City', value: state?.route?.sourceCity?.cityName});
    details.push({key: 'Destination City', value: state?.route?.destinationCity?.cityName})
    details.push({key: "Journey Date", value: state?.route?.date})
    details.push({key: "Mobile Number", value: state?.contactDetails?.phoneNumber})
    details.push({key: "Email", value: state?.contactDetails?.email})
    details.push({key: "Pickup Location", value: getLocationString(state?.selectedLocation?.selectedPickup)})
    details.push({key: "Drop Location", value: getLocationString(state?.selectedLocation?.selectedDrop)})
    state.passengerDetails.map((passenger, index) => {
        details.push({key: `Passenger ${index+1}`, value: getPassengerString(passenger)})
    })

    return details;
}

export {getAllDetails, getLocationString}