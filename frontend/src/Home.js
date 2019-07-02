import React, {Component} from 'react';
import NavbarContainer from './containers/NavbarContainer'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ShowCard from './components/ShowCard'

// urls

import NearbyCardDeck from './containers/NearbyCardDeck'

import { Link } from 'react-router-dom'

// redux
import { connect } from 'react-redux'
import { setLocation } from './actions/users'

class Home extends Component {

  success = position => {
    console.log('success')
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    this.props.setLocation(pos)
  }

  fail = err => {
    // handleLocationError(true, infoWindow, map.getCenter());
    console.log("error: ", err)
  }

  askLocation = () => {
    // debugger
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(this.success, this.fail, {maximumAge:60000, enableHighAccuracy: true});
    } else {
      console.log("Browser doesn't support Geolocation")
      // this.handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  componentDidMount() {
    this.askLocation()
  }

  render() {
      if (!!this.props.nearByLocations) {
        console.log(this.props.nearByLocations.groups)
        console.log(this.props.nearByLocations.tournaments)
        console.log(this.props.nearByLocations.games)
      }
      return (
        <div className="App">
            <NavbarContainer />
            <div className='landing-page'>
            <div className='page-content'>
              <Link to='/games' >
                Games
              </Link>
              <Link to='/tournaments' >
              Tournaments
              </Link>
            </div>
            </div>
            <NearbyCardDeck type='Pickup games'/>
            <NearbyCardDeck type='Tournaments'/>
            <NearbyCardDeck type='Groups'/>
        </div>
      );
  }
}

export default connect(state => ({latLng: state.latLng, nearByLocations: state.nearByLocations}), { setLocation })(Home);
