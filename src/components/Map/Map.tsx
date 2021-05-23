import { Map, GoogleApiWrapper, Circle } from 'google-maps-react'
import { useState, useEffect } from 'react';
// import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
require('dotenv').config()

interface MapDisplayProps {
  latLong: any
  google: any
}

export const MapDisplay = ({ latLong, google }: MapDisplayProps) => {

  const mapStyles = {
    width: '50%',
    height: '19%',
  };

  return (
    <>
    { latLong.lat !== 0 ?
    <Map
    google={google}
    style={mapStyles}
    initialCenter={latLong}
    >
       <Circle
        radius={200}
        center={latLong}
        onMouseover={() => console.log('mouseover')}
        onClick={() => console.log('click')}
        onMouseout={() => console.log('mouseout')}
        strokeColor='transparent'
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#FF0000'
        fillOpacity={0.2}
      />
    </Map>
    :
    <p>LOADING</p>
    }
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_PLACES}`
})(MapDisplay);

