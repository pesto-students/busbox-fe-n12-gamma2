import actionNames from '../actionNames'

const initialState = {
    accessToken : null,
    email: null,
    signupData : {       
        fullname: '',
        email: '',
        password : '',
        confirmPassword : ''
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionNames.SET_ACCESS_TOKEN :  
            return {...state, accessToken: action.payload}
        case actionNames.SET_SIGNUP_DATA :  
            return {...state, signupData: action.payload}
        case actionNames.SET_EMAIL :  
            return {...state, email: action.payload}
        default: 
            return state;
    }
}

export default reducer;