import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};


export const MapContainer  = (props: any) => {
  return (
    // <div></div>
    <Map
    google={props.google}
    style={mapStyles}
    initialCenter={
      {
        lat: -1.2884,
        lng: 36.8233
      }
    }
    />
    );
  }
  
  export const googleApiWrapper = GoogleApiWrapper({
    apiKey: 'AIzaSyBS_2C_7FuKpDZ6Hv4uo2Shqn_fctik4Ik'
  })(MapContainer);
  // export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBS_2C_7FuKpDZ6Hv4uo2Shqn_fctik4Ik'
// })(MapContainer);