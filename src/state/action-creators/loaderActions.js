import actionNames from "../actionNames"

export const toggleLoader = (isLoading) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_ACCESS_TOKEN,
        payload : isLoading
    })
}
