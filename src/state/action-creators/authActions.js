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
