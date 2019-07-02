import React, {Component} from 'react';
import NavbarContainer from './containers/NavbarContainer'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

// urls

import NearbyCardDeck from './containers/NearbyCardDeck'

import { Link } from 'react-router-dom'

// redux
import { connect } from 'react-redux'
import { setLocation } from './actions/users'

class Home extends Component {

  askLocation = () => {
    // debugger
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        debugger
        this.props.setLocation(pos)
      }, err => {
        // handleLocationError(true, infoWindow, map.getCenter());
        console.log("error: ", err)
      }, {maximumAge:60000, timeout: 5000, enableHighAccuracy: true});
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
        <React.Fragment>
        <div className="App">
          <NavbarContainer />
          <ButtonToolbar>
          <Link to='/games' className='btn btn-primary btn-lg'>
            Games
          </Link>
          <Link to='/tournaments' className='btn btn-primary btn-lg'>
          Tournaments
          </Link>
        </ButtonToolbar>
        </div>
        <NearbyCardDeck type='Pickup games'/>
        <NearbyCardDeck type='Tournaments'/>
        <NearbyCardDeck type='Groups'/>
        </React.Fragment>
      );
  }
}

export default connect(state => ({latLng: state.latLng, nearByLocations: state.nearByLocations}), { setLocation })(Home);
