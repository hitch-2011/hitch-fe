import { Map, GoogleApiWrapper } from 'google-maps-react'
import { useState, useEffect } from 'react';
// import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
require('dotenv').config()

interface MapDisplayProps {
  latLong: any
  google: any
}

export const MapDisplay = ({ latLong, google }: MapDisplayProps) => {

  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [currentLocation, setCurrentLocation] = useState({lat: 10, lng: 100})

  // useEffect(() => {
  //   if (address) {
  //     geocodeByAddress(address)
  //       .then(results => getLatLng(results[0]))
  //       .then(latLng => {
  //         // console.log(latLng)
  //         setLat(latLng.lat)
  //         setLong(latLng.lng)
  //       })
  //       .catch(error => console.error('Error', error));
  //   }
  // }, [address])

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
    // initialCenter={latLong}
    initialCenter={latLong}
    />
    :
    <p>LOADING</p>
    }
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_PLACES}`
})(MapDisplay);

