import actionNames from '../../state/actionNames';
import { store } from '../../state/store'

const getSnackbarPayload = (type, message) => ({
    type : actionNames.SHOW_SNACKBAR,
    payload : {
        open: true,
        message,
        type
    }
})

const showSnackbar = type => message => store.dispatch(getSnackbarPayload(type, message)) 

const snackbar = {
    error : showSnackbar('error'),
    success : showSnackbar('success'),
    warning : showSnackbar('warning'),
    info : showSnackbar('info')
}

export default snackbar