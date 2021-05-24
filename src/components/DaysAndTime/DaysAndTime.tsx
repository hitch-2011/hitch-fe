import React, {FC, Dispatch, SetStateAction} from 'react';
import { DayPicker } from '../../interfaces/interfaces';
import Error from '../Error/Error';

interface DaysAndTimeProps {
  property: string;
  method: Dispatch<SetStateAction<string>>;
  setDays: Dispatch<SetStateAction<DayPicker>>;
  days: DayPicker;
  error: boolean;
}

const DaysAndTime: FC<DaysAndTimeProps> = ({property, method, setDays, days, error}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setDays({...days, [id]: checked});
  };

  const daysCheckBox = Object.keys(days).map((day, i) => {
    return (
      <div key={i}>
        <input 
          id={day}
          type="checkbox"
          value={day}
          checked={days[day]}
          onChange={handleChange}
        />
        <label className="days__label" htmlFor={day}>{day.charAt(0).toUpperCase()}
        </label>
      </ div>
    )
  })
  return (
    <div className='days-and-time'>
      <h1 className="days-and-time__header">Days and Time</h1>
      <input 
        type="time" 
        id="time" 
        name="time" 
        className="time-input"
        value={property}
        onChange={e => method(e.target.value)}
        // required
      />
      
      <div className='days'>
        {daysCheckBox}
      </div>
      {error && <Error message={'Please pick at least one day'} />}
    </div>
  )
}

export default DaysAndTime;