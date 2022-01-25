import actionNames from '../actionNames'

const initialState = {
    isLoading : false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionNames.TOGGLE_LOADER :  
            return {...state, isLoading: action.payload}
        default: 
            return state;
    }
}

export default reducer;