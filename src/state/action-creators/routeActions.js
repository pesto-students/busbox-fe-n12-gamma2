import actionNames from "../actionNames"

export const setCurrentRoute = (currentRoute) => {
    return (dispatch) => dispatch({
        type: actionNames.SET_CURRENT_ROUTE,
        payload : currentRoute
    })
}
