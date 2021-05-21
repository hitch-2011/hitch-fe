// import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
  width: '100%',
  height: '100%',
};

export const MapDisplay  = (props: any) => {
  return (
    <Map
      google={props.google}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176}}
    />
  );
}

 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBS_2C_7FuKpDZ6Hv4uo2Shqn_fctik4Ik'
})(MapDisplay);

