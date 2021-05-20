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
            <div key={1}>
              <input
                {...getInputProps({
                  placeholder,
                  className: 'location-search-input',
                })}
                required
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion, i) => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  suggestion.id = i.toString()
                  //this npm package sets the key to id, however id returns undefined.
                  //here we reassign the id to index and stringify because it needs a type of 'string'
                  return (
                    <section
                      {...getSuggestionItemProps(suggestion, {
                        className
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </section>
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

