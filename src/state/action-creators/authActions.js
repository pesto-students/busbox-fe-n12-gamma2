import actionNames from "../actionNames"

export const setAccessToken = (token) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_ACCESS_TOKEN,
        payload : token
    })
}
