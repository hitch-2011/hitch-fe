import React, {Dispatch, SetStateAction, FC} from 'react';
import Form from '../Form/Form';

interface RegistrationProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  email: string; 
  setEmail: Dispatch<SetStateAction<string>>;
  page: number; 
  setPage: Dispatch<SetStateAction<number>>;
  make: string; 
  setMake: Dispatch<SetStateAction<string>>;
  model: string; 
  setModel: Dispatch<SetStateAction<string>>;
  year: string; 
  setYear: Dispatch<SetStateAction<string>>;
  origin: string; 
  setOrigin: Dispatch<SetStateAction<string>>;
  destination: string;
  setDestination: Dispatch<SetStateAction<string>>;
}

const Registration: FC<RegistrationProps> = (props) => {
  const {
    name,
    setName,
    username, 
    setUsername,
    email, 
    setEmail,
    page, 
    setPage,
    make, 
    setMake,
    model, 
    setModel,
    year, 
    setYear,
    origin, 
    setOrigin,
    destination,
    setDestination
  } = props
  return(
    <div>
      {page === 0 && 
          <Form 
            header="Name"
            page={page}
            setPage={setPage}
            inputs={[{property: name, method: setName, placeholder: 'Name'}, 
            {property: username, method: setUsername, placeholder: 'Username'}, 
            {property: email, method: setEmail, placeholder: 'Email'}]} 
          />
        }
        {page === 1 &&
          <Form 
            header="Car Details"
            page={page}
            setPage={setPage}
            inputs={[{property: make, method: setMake, placeholder: 'Make'}, 
            {property: model, method: setModel, placeholder: 'Model'}, 
            {property: year, method: setYear, placeholder: 'Year'}]} 
          />
        }
        {page === 2 &&
          <Form 
            header="Origin and Destination"
            page={page}
            setPage={setPage}
            inputs={[{property: origin, method: setOrigin, placeholder: 'Origin'}, 
            {property: destination, method: setDestination, placeholder: 'Destination'}]} 
          />
        }
        {page === 3 &&
          <Form 
            header="Days and Time"
            page={page}
            setPage={setPage}
            inputs={[{property: destination, method: setDestination, placeholder: 'Destination'}]} 
          />
        }
      </div>
  )
}

export default Registration;