import { Map, GoogleApiWrapper } from 'google-maps-react'
import { useState, useEffect } from 'react';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
require('dotenv').config()

interface MapDisplayProps {
  address: any
  google: any
}

export const MapDisplay = ({ address, google }: MapDisplayProps) => {

  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  // const [latLong, setLatLong] = useState({lat: 0, lng: 0})

  useEffect(() => {
    if (address) {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          console.log(latLng)
          setLat(latLng.lat)
          setLong(latLng.lng)
        })
        .catch(error => console.error('Error', error));
    }
  }, [address])

  const mapStyles = {
    width: '50%',
    height: '19%',
  };

  return (
    <Map
    google={google}
    style={mapStyles}
    // initialCenter={latLong}
    initialCenter={{lat: lat, lng: long}}
    />
  );
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_PLACES}`
})(MapDisplay);

