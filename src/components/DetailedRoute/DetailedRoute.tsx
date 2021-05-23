import { useEffect, FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { detailedRouteData } from '../../mockData';
import userPhoto from '../../assets/images/man.png';
import { getUserByID } from '../../apiCalls';
import close from '../../assets/images/close.png'
import MapDisplay from '../Map/Map'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';


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

interface VehicleData {
  make: string
  model: string
}
interface UserData {
  bio: string
  fullname: string
  ride_days: Array<string>
  user_rides: Array<RideData>
  vehicle: VehicleData
}

const DetailedRoute: FC<DetailedRouteProps> = ({ userId }) => {

  const [matchedUser, setMatchedUser] = useState<UserData>()
  const [originLatLong, setOriginLatLong] = useState({lat: 0, lng: 0})
  const [destinationLatLong, setDestinationLatLong] = useState({lat: 0, lng: 0})

  useEffect(() => {
    getUserByID(parseInt(userId))
      .then(response => {
        setMatchedUser(response.data.attributes)
        console.log(response)
        geocodeByAddress(response.data.attributes.user_rides[0].origin)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          setOriginLatLong(latLng)
        })
        geocodeByAddress(response.data.attributes.user_rides[0].destination)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          setDestinationLatLong(latLng)
        })
        .catch(error => console.error('Error', error));
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
          <h3>{matchedUser?.fullname}</h3>
          <p>{matchedUser?.bio}</p>
          <div className='user-details__vehicle-details'>
            <p className='user-details__make'>{matchedUser?.vehicle.make}</p>
            <p>{matchedUser?.vehicle.model}</p>
          </div>
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
            <MapDisplay latLong={originLatLong}/>
          </div>
          <div className='route-details__distance'>
            <h3>Origin Zip</h3>
            <p className='route-details__miles'>{matchedUser?.user_rides[0].zipcode_origin}</p>
          </div>
        </section>
        <section className='route-details'>
          <div className='route-details__map-div'>
            <MapDisplay latLong={destinationLatLong}/>
          </div>
          <div className='route-details__distance'>
            <h3>Destination Zip</h3>
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
