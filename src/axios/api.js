import axios from 'axios'
import { store } from '../state/store'
import actionNames from '../state/actionNames'

const BASE_URL = 'http://patilgajanan.com:3000'
// const BASE_URL = 'http://localhost:3000'

const api = axios.create({
    baseURL:BASE_URL,
    withCredentials: true
})


api.interceptors.request.use(function(config) {
    store.dispatch({
        type: actionNames.TOGGLE_LOADER,
        payload: true
    });
    const accessToken = store.getState()?.auth?.accessToken;
    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
})


api.interceptors.response.use((res) => {
    store.dispatch({
        type: actionNames.TOGGLE_LOADER,
        payload: false
    });
    return res;
}, error => {
    store.dispatch({
        type: actionNames.TOGGLE_LOADER,
        payload: false
    });
    if((error?.response?.data?.message==='unauthorized' && error?.response?.status === 401) || error?.response?.status===403){
        return api.post('/auth/refresh')
        .then(response => {
            store.dispatch({
                type: actionNames.SET_ACCESS_TOKEN,
                payload: response.data.accessToken
            });
            error.config.headers.Authorization = `Bearer ${response.data.accessToken}`
            return axios.request(error.config);
        }).catch(error => {
            console.log('error :- ', error)
            return error;
        })
    }
    return Promise.reject(error);
})

export default api;