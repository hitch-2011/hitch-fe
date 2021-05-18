import {Dispatch, SetStateAction} from 'react';

export interface RegistrationProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
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
  departTime: string;
  setDepartTime: Dispatch<SetStateAction<string>>;
  days: DayPicker;
  setDays: Dispatch<SetStateAction<DayPicker>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  bio: string;
  setBio: Dispatch<SetStateAction<string>>;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

export interface DayPicker {
  sunday: boolean,
  monday: boolean,
  tuesday: boolean,
  wednesday: boolean,
  thursday: boolean,
  friday: boolean,
  saturday: boolean
}