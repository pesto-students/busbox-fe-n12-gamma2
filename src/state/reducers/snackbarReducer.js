import actionNames from '../actionNames'

const initialState = {
    open: false,
    message : "- - - - - -",
    type: 'warning'
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionNames.SHOW_SNACKBAR :  
            return action.payload
        case actionNames.HIDE_SNACKBAR :  
            return initialState
        default: 
            return state;
    }
}

export default reducer;
