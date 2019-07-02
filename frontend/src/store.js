import { createStore } from 'redux'

const initialState = { loggedIn: false, latLng: null}

const store = createStore((state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': 
            return {...state, loggedIn: action.loggedIn}
        case 'REMOVE_CURRENT_USER':
            return {...state, currentUser: null}
        case 'SET_LOCATION':
            return {...state, latLng: action.latLng}
        default: return state
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store