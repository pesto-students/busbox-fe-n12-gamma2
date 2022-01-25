import actionNames from '../actionNames'

const initialState = {
    accessToken : null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionNames.SET_ACCESS_TOKEN :  
            return {...state, accessToken: action.payload}
        default: 
            return state;
    }
}

export default reducer;