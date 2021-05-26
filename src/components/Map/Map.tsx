import { Map, GoogleApiWrapper, Circle } from 'google-maps-react'
require('dotenv').config()

interface MapDisplayProps {
  latLong: any
  google: any
}

export const MapDisplay = ({ latLong, google }: MapDisplayProps) => {
  const containerStyle = {
  position: 'relative',  
  width: '100%',
  height: '100vh'
}
  const mapStyles = {
    width: '100%',
    height: '19%',
  };

  return (
    <>
    { latLong.lat !== 0 ?
    <Map
    google={google}
    containerStyle={containerStyle}
    style={mapStyles}
    initialCenter={latLong}
    >
       <Circle
        radius={250}
        center={latLong}
        onMouseover={() => console.log('mouseover')}
        onClick={() => console.log('click')}
        onMouseout={() => console.log('mouseout')}
        strokeColor='transparent'
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#4f2dc7'
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

