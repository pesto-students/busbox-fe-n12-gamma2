import actionNames from '../actionNames'

const initialState = {
    userInputSourceCity : null,
    userInputDestinationCity: null,
    userInputDate : null,
    buses: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionNames.SET_CURRENT_ROUTE :  
            return {...state, ...action.payload}
        case actionNames.SET_FOUND_BUSES :  
            return {...state, buses: action.payload}
        case actionNames.SET_SELECTED_BUS :  
            return {...state, selectedBus: action.payload}
        case actionNames.SET_BUS_ROUTE :  
            return {...state, ...action.payload}
        case actionNames.SET_SELECTED_SEATS :  
            return {...state, selectedSeats: action.payload}
        case actionNames.SET_LOCATIONS :  
            return {...state, ...action.payload}
        case actionNames.SET_PASSENGER_DETAILS :  
            return {...state, passengerDetails: action.payload}
        case actionNames.SET_CONTACT_DETAILS :  
            return {...state, contactDetails: action.payload}
        case actionNames.SET_REQUEST :  
            return {...state, request: action.payload}
        case actionNames.SET_BOOKINGS :  
            return {...state, bookings: action.payload}
        case actionNames.SET_SELECTED_BOOKING :  
            return {...state, selectedBooking: action.payload}
        case actionNames.RESET_DATA : 
            return initialState;
        default: 
            return state;
    }
}

export default reducer;