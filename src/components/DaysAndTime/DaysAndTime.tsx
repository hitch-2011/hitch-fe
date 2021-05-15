import React, {FC, Dispatch, SetStateAction} from 'react';
import { DayPicker } from '../../interfaces/interfaces'

interface DaysAndTimeProps {
  property: string;
  method: Dispatch<SetStateAction<string>>
  setDays: Dispatch<SetStateAction<DayPicker>>
  days: DayPicker
}

const DaysAndTime: FC<DaysAndTimeProps> = ({property, method, setDays, days}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.id
    // setDays({...days, [e.target.id]: days[e.target.id]})
  }
  return (
    <div className='days-and-time'>
      <h1 className="days-and-time__header">Days and Time</h1>
      <input
        value={property}
        placeholder="Time and Days"
        onChange={event => method(event.target.value)}
        type='text'
        // required
      />
      <div className='days'>
        <input 
          id="sunday"
          type="checkbox"
          value="sunday"
          checked={days['sunday']}
          onChange={handleChange}
        />
        <label className="days__label" htmlFor="sunday">S
        </label>
        <input 
          id="monday"
          type="checkbox"
          value="monday"
          checked={days['sunday']}
          onChange={handleChange}
        />
        <label className="days__label" htmlFor="monday">M
        </label>
        <input 
          id="tuesday"
          type="checkbox"
          value="tuesday"
          checked={days['sunday']}
          onChange={handleChange}
        />
        <label className="days__label" htmlFor="tuesday">T
        </label>
        <input 
          id="wednesday"
          type="checkbox"
          value="wednesday"
          checked={days['sunday']}
          onChange={handleChange}
        />
        <label className="days__label" htmlFor="wednesday">W
        </label>
        <input 
          id="thursday"
          type="checkbox"
          value="thursday"
          checked={days['sunday']}
          onChange={handleChange}
        />
        <label className="days__label" htmlFor="thursday">T
        </label>
        <input 
          id="friday"
          type="checkbox"
          value="friday"
          checked={days['sunday']}
          onChange={handleChange}
        />
        <label className="days__label" htmlFor="friday">F
        </label>
        <input 
          id="saturday"
          type="checkbox"
          value="saturday"
          checked={days['sunday']}
          onChange={handleChange}
        />
        <label className="days__label" htmlFor="saturday">S
        </label>
      </div>
    </div>
  )
}

export default DaysAndTime;