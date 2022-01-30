import actionNames from "../actionNames"

export const setUserInputCurrentRoute = (currentRoute) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_CURRENT_ROUTE,
        payload : {
            userInputSourceCity : currentRoute?.sourceCity,
            userInputDestinationCity: currentRoute?.destinationCity,
            userInputDate : currentRoute?.date
        }
    })
}

export const setFoundBuses = (buses) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_FOUND_BUSES,
        payload : buses
    })
}

export const setSelectedBus = (bus) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_SELECTED_BUS,
        payload: bus
    })
}

export const setSelectedSeats = (seats) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_SELECTED_SEATS,
        payload: seats
    })
}

export const setBusRoute = (route) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_BUS_ROUTE,
        payload: route
    })
}

export const setLocations = (locations) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_LOCATIONS,
        payload: locations
    })
}

export const setPassengerDetails = (passengers) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_PASSENGER_DETAILS,
        payload: passengers
    })
}

export const setContactDetails = (contactDetails) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_CONTACT_DETAILS,
        payload: contactDetails
    })
}

export const setRequest = (request) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_REQUEST,
        payload: request
    })
}

export const setBookings = (bookings) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_BOOKINGS,
        payload: bookings
    })
}

export const setSelectedBooking = (booking) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_SELECTED_BOOKING,
        payload: booking
    })
}