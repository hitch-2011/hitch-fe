import { Map, GoogleApiWrapper } from 'google-maps-react'
require('dotenv').config()

export const MapDisplay = (props: any) => {

  const mapStyles = {
    width: '50%',
    height: '19%',
  };

  return (
    <Map
    google={props.google}
    style={mapStyles}
    initialCenter={{ lat: 47.444, lng: -122.176}}
    />
    );
  }

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_PLACES}`
})(MapDisplay);

