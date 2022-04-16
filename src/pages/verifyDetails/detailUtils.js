import * as commonUtils from '../commonUtils'

const getLocationString = (location) => {
    return `${location?.locationName}, ${location?.address}` 
}

const getAllDetails = (state) => {
    let details = [];
    details.push({key: 'Source City', value: commonUtils.capitalize(state?.sourceCity?.cityName)});
    details.push({key: 'Destination City', value: commonUtils.capitalize(state?.destinationCity?.cityName)})
    details.push({key: "Journey Date", value: state?.userInputDate})
    details.push({key: "Seat Number(s)", value: state?.selectedSeats.join()})
    details.push({key: "Bus Type", value: state?.selectedBus?.busType})
    details.push({key: "Mobile Number", value: state?.contactDetails?.phoneNumber})
    details.push({key: "Email", value: state?.contactDetails?.email})
    details.push({key: "Pickup Location", value: getLocationString(state?.selectedPickup)})
    details.push({key: "Drop Location", value: getLocationString(state?.selectedDrop)})
    state.passengerDetails.map((passenger, index) => {
        details.push({key: `Passenger ${index+1}`, value: commonUtils.getPassengerString(passenger)})
    })

    return details;
}

export {getAllDetails, getLocationString}