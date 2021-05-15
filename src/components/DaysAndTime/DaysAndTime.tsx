import React, {FC, Dispatch, SetStateAction} from 'react';

interface DaysAndTimeProps {
  property: string;
  method: Dispatch<SetStateAction<string>>
}

const DaysAndTime: FC<DaysAndTimeProps> = ({property, method}) => {
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
    </div>
  )
}

export default DaysAndTime;