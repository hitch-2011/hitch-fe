import React, {FC, Dispatch, SetStateAction} from 'react';
import { Link } from 'react-router-dom';
import { detailedRouteData } from '../../mockData';
import userPhoto from '../../assets/images/man.png'
import './_DetailedRoute.scss'

// interface DetailedRouteProps {
//   id: string
// }

// const DetailedRoute: FC<DetailedRouteProps> = () => {
const DetailedRoute = () => {

  const days = detailedRouteData.route.days.map((day, index) => {
    let formattedDay
    if (day === 'tuesday' || day === 'thursday') {
      formattedDay = day.charAt(0).toUpperCase() + day.slice(1,2)
    } else {
      formattedDay = day.substring(0, 1).toUpperCase()
    }
    return (
      <div>
        {formattedDay}
      </div>
    )
  })

  return (
    <div>
      <section className='header'>
        <Link to='matches'>
          <p> back </p>
        </Link>
        <img className='header__photo' src={userPhoto} />
      </section>
      <hr></hr>
      <section className='user-details'>
        <article className='user-details__driver-bio'>
          <h3>Driver Details</h3>
          <p>{detailedRouteData.user.bio}</p>
        </article>
        <article className='user-details__route-details'>
          <h3>Time: </h3>
          <p>{detailedRouteData.route.time}</p>
          <h3>Days: </h3>
          <p className='user-details__days'>{days}</p>
        </article>
      </section>
      <section>
        // origin map 
        // destination map 
      </section>
      <button>
        // Link to user profile? 
        // request a hitch
      </button>
    </div>
  )
}

export default DetailedRoute