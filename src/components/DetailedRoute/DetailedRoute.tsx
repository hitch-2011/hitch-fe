import { useEffect, FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { detailedRouteData } from '../../mockData';
import userPhoto from '../../assets/images/man.png';
import { getUserByID } from '../../apiCalls';
import close from '../../assets/images/close.png'
import MapDisplay from '../Map/Map'

interface DetailedRouteProps {
  userId: string
}

interface RideData {
  destination: string
  origin: string
  departure_time: string
  zipcode_destination: string
  zipcode_origin: string
}
interface UserData {
  bio: string
  fullname: string
  ride_days: Array<string>
  user_rides: Array<RideData>
}

const DetailedRoute: FC<DetailedRouteProps> = ({ userId }) => {
  
  const [matchedUser, setMatchedUser] = useState<UserData>()

  useEffect(() => {
    getUserByID(parseInt(userId))
      .then(response => {
        console.log(response)
        setMatchedUser(response.data.attributes)
      })
  }, [userId])

  const days = matchedUser?.ride_days.map((day, index) => {
    return (
      <div className='day' key={index}>
        {(day === 'tuesday' || day === 'thursday') ? day.charAt(0).toUpperCase() + day.slice(1,2) : day.substring(0, 1).toUpperCase()}
      </div>
    )
  })

  return (
    <div className="detailed-route">
      <section className='header'>
        <img className='header__photo' src={userPhoto} alt={detailedRouteData.user.name}/>
        <Link className='header__back' to='matched-routes'>
          <img className='header__close-icon' src={close} alt='close-button'/>
        </Link>
      </section>
      <section className='user-details'>
        <article className='user-details__driver-bio'>
          <h3>Driver Details</h3>
          <p>{matchedUser?.bio}</p>
        </article>
        <article className='user-details__route-details'>
          <h3>Time: </h3>
          <p>{matchedUser?.user_rides[0].departure_time}</p>
          <h3>Days: </h3>
          <div className='user-details__days'>{days}</div>
        </article>
      </section>
      <section>
        <section className='route-details'>
          <div className='route-details__map-div'>
            <MapDisplay address={matchedUser?.user_rides[0].origin}/>
          </div>
          <div className='route-details__distance'>
            <h3>Origin Zip: </h3>
            <p className='route-details__miles'>{matchedUser?.user_rides[0].zipcode_origin}</p>
          </div>
        </section>
        <section className='route-details'>
          <div className='route-details__map-div'>
            <MapDisplay address={matchedUser?.user_rides[0].destination}/>
          </div>
          <div className='route-details__distance'>
            <h3>Destination Zip: </h3>
            <p className='route-details__miles'>{matchedUser?.user_rides[0].zipcode_destination}</p>
          </div>
        </section>
      </section>
      <button className="registration__button btn">
        Request a Hitch
      </button>
    </div>
  )
}

export default DetailedRoute;
