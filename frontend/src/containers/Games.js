import React, { Component } from 'react'
import NavbarContainer from './NavbarContainer'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Games extends Component {

    render() {
        return (<div>
            <NavbarContainer />
            <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAi5sbutxQNY6KM3W7mez3opdp8VfeneMY' }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={14}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      </div>
        )
    }
}

export default Games