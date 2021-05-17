import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const handleSelect = (address: string): void => {
  geocodeByAddress(address)
    .then((results: Array<string>) => setOrigin(results[0]))
    .then((address: string) => console.log('Success', address))
    .catch((error: string) => console.error('Error', error));
};

const OriginDestination = () => {
  return (
    <PlacesAutocomplete
      value={origin}
      onChange={setOrigin}
      onSelect={handleSelect}
    >

    </PlacesAutocomplete>
  )
  // <PlacesAutocomplete
  //   value={origin}
  //   onChange={setOrigin}
  //   onSelect={handleSelect}
  // >

  // </PlacesAutocomplete>
}

export default OriginDestination;