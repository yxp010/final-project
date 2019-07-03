import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const initialState = { loggedIn: false, latLng: null, nearByLocations: null}

const store = createStore((state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': 
            return {...state, loggedIn: action.loggedIn}
        case 'LOGOUT':
            window.location.assign('/')
            return {...state, loggedIn: action.loggedIn}
        case 'SET_LOCATION':
            return {...state, latLng: action.latLng}
        case 'SET_NEARBY_LOCATIONS':
            return {...state, nearByLocations: action.nearByLocations}
        default: return state
    }
}, applyMiddleware(thunk))

export default store