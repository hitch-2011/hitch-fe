import { FC } from 'react';

interface DaysProps {
  matchedDays: Array<string>
}

const Days: FC<DaysProps> = ({ matchedDays }) => {
  const days = matchedDays.map((day, index) => {
    return (
      <div className='profile-days__profile-day' key={index}>
        {(day === 'tuesday' || day === 'thursday' || day === 'saturday' || day === 'sunday') ? 
        day.charAt(0).toUpperCase() + day.slice(1,2) : 
        day.substring(0, 1).toUpperCase()}
      </div>
    )
  })
  return (
    <div className='profile-days'>
      {days}
    </div>
  )
}

export default Days