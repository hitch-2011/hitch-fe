import React, { FC } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
  width: '50%',
  height: '20%',
};

interface MapProps {
  // zoom: number
}

export const MapDisplay: FC<MapProps> = (props: any) => {
  return (
    <Map
      google={props.google}
      style={mapStyles}
      // zoom={8}
      initialCenter={{ lat: 47.444, lng: -122.176}}
    />
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBS_2C_7FuKpDZ6Hv4uo2Shqn_fctik4Ik'
})(MapDisplay);

