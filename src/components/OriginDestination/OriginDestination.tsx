import React, { Dispatch, SetStateAction, FC } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import PlacesInput from '../PlacesInput/PlacesInput';

interface OriginDestinationProps {
  setOrigin: Dispatch<SetStateAction<string>>;
  origin: string;
  setDestination: Dispatch<SetStateAction<string>>;
  destination: string;
}


const OriginDestination: FC<OriginDestinationProps> = ({ setOrigin, origin, setDestination, destination }) => {
  return (
    <div className="origin-destination">
      <h1 className="origin-destination__header">Origin and Destination</h1>
      <PlacesInput
        value={origin}
        onChange={setOrigin}
        placeholder={'From ...'}
      />
      <PlacesInput
        value={destination}
        onChange={setDestination}
        placeholder={'To ...'}
      />
    </div>
  )
}

export default OriginDestination;