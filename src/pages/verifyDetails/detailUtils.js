const getLocationString = (location) => {
    return `${location?.locationName}, ${location?.address}` 
}

const getPassengerString = (passenger) => {
    return `${passenger.name} ${passenger.gender.charAt(0)} ${passenger.age}`
}

const capitalize = (str) => {
    if(!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1)
} 

const getAllDetails = (state) => {
    let details = [];

    details.push({key: 'Source City', value: capitalize(state?.sourceCity?.cityName)});
    details.push({key: 'Destination City', value: capitalize(state?.destinationCity?.cityName)})
    details.push({key: "Journey Date", value: state?.userInputDate})
    details.push({key: "Seat Number(s)", value: state?.selectedSeats?.join()})
    details.push({key: "Mobile Number", value: state?.contactDetails?.phoneNumber})
    details.push({key: "Email", value: state?.contactDetails?.email})
    details.push({key: "Pickup Location", value: getLocationString(state?.selectedPickup)})
    details.push({key: "Drop Location", value: getLocationString(state?.selectedDrop)})
    state.passengerDetails.map((passenger, index) => {
        details.push({key: `Passenger ${index+1}`, value: getPassengerString(passenger)})
    })

    return details;
}

export {getAllDetails, getLocationString}