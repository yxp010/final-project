import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps } from "recompose"
import React from 'react'
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAi5sbutxQNY6KM3W7mez3opdp8VfeneMY&libraries=geometry"
  // async defer></script> 
  const mapEnvironment = compose(
    withProps({
      googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAi5sbutxQNY6KM3W7mez3opdp8VfeneMY&libraries=geometry,drawing,places',
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )
  
  
  const mapLayout = props =>
    <GoogleMap
      defaultZoom={18}
      defaultCenter={props.center}
    >
      {props.isMarkerShown && <Marker position={props.center} />}
    </GoogleMap>
  
  
  const Map = mapEnvironment(mapLayout);

  export default Map