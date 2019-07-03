import { nearEventsURL } from '../urls'

export function setLocation(latLng) {
    return (dispatch) => {
        dispatch({type: 'SET_LOCATION', latLng});
        return fetch(nearEventsURL, {
            method: 'POST',
            body: JSON.stringify(latLng),
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })
          .then(res => res.json())
          .then(nearByLocations => dispatch({
            type: 'SET_NEARBY_LOCATIONS',
            nearByLocations
        }))
    }
    
}