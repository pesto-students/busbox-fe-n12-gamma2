import {combineReducers} from 'redux'

import authReducer from './authReducer'
import loaderReducer from './loaderReducer'
import routeReducer from './routeReducer'

const reducers = combineReducers(
    {
        auth : authReducer,
        loader: loaderReducer,
        route: routeReducer
    }
)

export default reducers;