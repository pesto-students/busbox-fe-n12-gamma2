import actionNames from "../actionNames"

export const showSnackbar = (snackbar) => {
    return (dispatch) => dispatch({
        type: actionNames.SHOW_SNACKBAR,
        payload : snackbar
    })
}

export const hideSnackbar = () => {
    return (dispatch) => dispatch({
        type: actionNames.HIDE_SNACKBAR,
        payload: null
    })
}
