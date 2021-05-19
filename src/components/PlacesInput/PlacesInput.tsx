import React, { FC, Dispatch, SetStateAction } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

interface PlacesInputProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

const PlacesInput: FC<PlacesInputProps> = ({value, onChange, placeholder}) => {
  const handleSelect = (address: string) => {
   onChange(address);
   geocodeByAddress(address)
     .then(results => {
       onChange(results[0].formatted_address)
       return results[0].formatted_address
     })
     .then(latLng => console.log('Success', latLng))
     .catch(error => console.error('Error', error));
  };
  return (
    <div>
      <PlacesAutocomplete
        value={value}
        onChange={onChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder,
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                    console.log(suggestion.description)
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className
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
}

export default PlacesInput;

