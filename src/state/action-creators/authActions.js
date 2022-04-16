import actionNames from "../actionNames"

export const setAccessToken = (token) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_ACCESS_TOKEN,
        payload : token
    })
}

export const setSignupData = (data) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_SIGNUP_DATA,
        payload : data
    })
}

export const setEmail = (email) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_EMAIL,
        payload : email
    })
}

export const clearAuthData = () => {
    return (dispatch) => dispatch({
        type: actionNames.CLEAR_AUTH_DATA,
        payload : null
    })
}