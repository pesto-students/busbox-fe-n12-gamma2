import actionNames from '../actionNames'

const initialState = {
    sourceCity : null,
    destinationCity: null,
    date : null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionNames.SET_CURRENT_ROUTE :  
            return action.payload
        default: 
            return state;
    }
}

export default reducer;