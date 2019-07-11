import { nearEventsURL } from '../urls'

export function setLocation(latLng, option) {
    return (dispatch) => {
        dispatch({type: 'SET_LOCATION', latLng});
        return fetch(nearEventsURL, {
            method: 'POST',
            body: JSON.stringify(option),
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })
          .then(res => res.json())
          .then(data => dispatch({
            type: 'SET_NEARBY_LOCATIONS',
            nearByLocations: {groups: data.groups, games: data.games},
            types: data.types
        }))
    }   
}

export function storeViewingPage(url) {
  return {
    type: 'STORE_VIEWING_PAGE',
    url
  }
}