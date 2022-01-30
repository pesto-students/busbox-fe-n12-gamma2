import * as commonUtils from '../commonUtils'


const getBookingDetails = (booking) => {
    let details = [];
    details.push({key: 'Source City', value: commonUtils.capitalize(booking?.sourceCity)});
    details.push({key: 'Destination City', value: commonUtils.capitalize(booking?.destinationCity)})
    details.push({key: "Journey Date", value: booking?.journeyDate})
    details.push({key: "Seat Number(s)", value: booking?.bookedSeats?.map(s => s.seatNumber)?.join()})
    details.push({key: "Bus Type", value: booking?.busType})
    details.push({key: "Mobile Number", value: booking?.contactDetails?.phone})
    details.push({key: "Email", value: booking?.contactDetails?.email})
    details.push({key: "Pickup Location", value: booking?.pickupLocation})
    details.push({key: "Drop Location", value: booking?.dropLocation})
    booking.passengerDetails.map((passenger, index) => {
        details.push({key: `Passenger ${index+1}`, value: commonUtils.getPassengerString(passenger)})
    })
    return details;
}

export default getBookingDetails;