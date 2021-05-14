import React, {Dispatch, SetStateAction, FC} from 'react';

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
    <h1>yeaaaas</h1>
  )
}

export default Registration;