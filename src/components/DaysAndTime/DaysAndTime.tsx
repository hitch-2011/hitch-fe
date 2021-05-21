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
    const { id, checked } = e.target
    setDays({...days, [id]: checked})
  }

  const daysCheckBox = Object.keys(days).map(day => {
    return (
      <>
        <input 
          id={day}
          type="checkbox"
          value={day}
          checked={days[day]}
          onChange={handleChange}
        />
        <label className="days__label" htmlFor={day}>{day.charAt(0).toUpperCase()}
        </label>
      </>
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
        {/* <input 
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
          checked={days['monday']}
          onChange={handleChange}
        />
        <label className="days__label" htmlFor="monday">M
        </label>
        <input 
          id="tuesday"
          type="checkbox"
          value="tuesday"
          checked={days['tuesday']}
          onChange={handleChange}
        />
        <label className="days__label" htmlFor="tuesday">T
        </label>
        <input 
          id="wednesday"
          type="checkbox"
          value="wednesday"
          checked={days['wednesday']}
          onChange={handleChange}
        />
        <label className="days__label" htmlFor="wednesday">W
        </label>
        <input 
          id="thursday"
          type="checkbox"
          value="thursday"
          checked={days['thursday']}
          onChange={handleChange}
        />
        <label className="days__label" htmlFor="thursday">T
        </label>
        <input 
          id="friday"
          type="checkbox"
          value="friday"
          checked={days['friday']}
          onChange={handleChange}
        />
        <label className="days__label" htmlFor="friday">F
        </label>
        <input 
          id="saturday"
          type="checkbox"
          value="saturday"
          checked={days['saturday']}
          onChange={handleChange}
        />
        <label className="days__label" htmlFor="saturday">S
        </label> */}
      </div>
    </div>
  )
}

export default DaysAndTime;