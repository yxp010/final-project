import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const initialState = { types: null, username: null, loggedIn: false, latLng: null, nearByLocations: null, viewedPageBeforeLogin: null, numberOfUnreadNotifications: 0, notifications: []}

const store = createStore((state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': 
            return {...state, loggedIn: action.loggedIn, username: action.username}
        case 'LOGOUT':
            window.location.assign('/')
            return {...state, loggedIn: action.loggedIn}
        case 'SET_LOCATION':
            return {...state, latLng: action.latLng}
        case 'SET_NEARBY_LOCATIONS':
            return {...state, nearByLocations: action.nearByLocations, types: action.types}
        case 'STORE_VIEWING_PAGE':
            return {...state, viewedPageBeforeLogin: action.url}
        case 'SET_UNREAD_NOTIFICATION_NUMBER':
            return {...state, numberOfUnreadNotifications: action.numberOfUnreadNotifications}
        case 'UNREAD_NOTIFICATION':
            return {...state, numberOfUnreadNotifications: state.numberOfUnreadNotifications + 1, notifications: action.notifications}
        case 'READ_NOTIFICATION':
            return {...state, numberOfUnreadNotifications: state.numberOfUnreadNotifications - 1, notifications: action.notifications}
        case 'ACCEPT_NOTIFICATION':
            return {...state, numberOfUnreadNotifications: action.numberOfUnreadNotifications, notifications: action.notifications}
        case 'SET_NOTIFICATIONS':
            return {...state, notifications: action.notifications}
        default: return state
    }
}, applyMiddleware(thunk))

export default store