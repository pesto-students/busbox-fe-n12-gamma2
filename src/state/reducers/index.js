import {combineReducers} from 'redux'

import authReducer from './authReducer'
import loaderReducer from './loaderReducer'
import dataReducer from './dataReducer'
import snackbarReducer from './snackbarReducer'

const reducers = combineReducers(
    {
        auth : authReducer,
        loader: loaderReducer,
        data: dataReducer,
        snackbar: snackbarReducer
    }
)

export default reducers;