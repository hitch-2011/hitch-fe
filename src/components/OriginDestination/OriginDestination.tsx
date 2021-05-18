import React, { Dispatch, SetStateAction, FC } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

interface OriginDestinationProps {
  setOrigin: Dispatch<SetStateAction<string>>
  origin: string
}


const OriginDestination: FC<OriginDestinationProps> = ({ setOrigin, origin }) => {
  const handleSelect = (address: string): any => {
    setOrigin(address)
   geocodeByAddress(address)
     .then(results => getLatLng(results[0]))
     .then(latLng => console.log('Success', latLng))
     .catch(error => console.error('Error', error));
  };
  return (
    <div className="origin-destination">

      <PlacesAutocomplete
        value={origin}
        onChange={setOrigin}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  // const style = suggestion.active
                  //   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  //   : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        // style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
      </PlacesAutocomplete>
    </div>
  )
  // <PlacesAutocomplete
  //   value={origin}
  //   onChange={setOrigin}
  //   onSelect={handleSelect}
  // >

  // </PlacesAutocomplete>
}

export default OriginDestination;