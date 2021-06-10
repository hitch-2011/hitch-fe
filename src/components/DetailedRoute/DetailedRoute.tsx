import { useEffect, FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserByID, requestFriend, denyFriend, acceptFriend } from '../../apiCalls';
import close from '../../assets/images/close.png';
import MapDisplay from '../Map/Map';
import Days from '../Days/Days';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import { formatTime } from '../../utilities/utilities';
import ProfileButton from '../../components/ProfileButton/ProfileButton';


interface DetailedRouteProps {
  userId: string;
  currentUser: boolean;
  matchId?: string;
}

interface RideData {
  destination: string;
  origin: string;
  departure_time: string;
  zipcode_destination: string;
  zipcode_origin: string;
}

interface VehicleData {
  make: string;
  model: string;
}
interface UserData {
  bio: string;
  fullname: string;
  ride_days: Array<string>;
  user_rides: Array<RideData>;
  vehicle: VehicleData;
  friendship_status: Array<string | number>;
  email: string;
}

const DetailedRoute: FC<DetailedRouteProps> = ({ userId, currentUser, matchId }) => {

  const [matchedUser, setMatchedUser] = useState<UserData>()
  const [originLatLong, setOriginLatLong] = useState({ lat: 0, lng: 0 })
  const [destinationLatLong, setDestinationLatLong] = useState({ lat: 0, lng: 0 })

  useEffect(() => {
    getUserByID(parseInt(userId), matchId ? parseInt(matchId) : undefined)
      .then(response => {
        console.log(response)
        setMatchedUser(response.data.attributes)
        geocodeByAddress(response.data.attributes.user_rides[0].origin)
          .then(results => getLatLng(results[0]))
          .then(latLng => setOriginLatLong(latLng))
        geocodeByAddress(response.data.attributes.user_rides[0].destination)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
            setDestinationLatLong(latLng)
          })
        .catch(error => console.error('Error', error));
      })
  }, [currentUser])

  const addFriend = () => {
    if(!matchId) {
      return
    }
    requestFriend(Number(userId), Number(matchId))
      .then(response => {
        console.log(response)
        setMatchedUser(response.data.attributes)
      })
  }

  const denyFriendship = () => {
    if(matchedUser?.friendship_status[1] === 'undefined') {
      return
    }
    denyFriend(Number(userId), Number(matchedUser?.friendship_status[1])).then(response => console.log(response));
  }

  const acceptFriendship = () => {
    if(matchedUser?.friendship_status[1] === 'undefined') {
      return
    }
    acceptFriend(Number(userId), Number(matchedUser?.friendship_status[1])).then(response => console.log(response));
    //set current user to false? to trigger rerender
  }

  return (
    <div className="detailed-route">
      <section className='header'>
        <ProfilePhoto name={matchedUser?.fullname}/>
        <Link className='header__back' to='matched-routes'>
          <img data-cy='close-button' className='header__close-icon' src={close} alt='close-button'/>
        </Link>
      </section>
      <section className='user-details'>
        <article className='user-details__driver-bio'>
          <h3 data-cy='user-name'>{matchedUser?.fullname}</h3>
          <p data-cy='user-bio'>{matchedUser?.bio}</p>
          <div className='user-details__vehicle-details'>
            <p className='user-details__make'>{matchedUser?.vehicle.make}</p>
            <p data-cy='user-model'>{matchedUser?.vehicle.model}</p>
          </div>
        </article>
        <article className='user-details__route-details'>
          <h3>Time: </h3>
          <p data-cy='user-time'>
            {matchedUser?.user_rides[0].departure_time && formatTime(matchedUser.user_rides[0].departure_time)}
          </p>
          <h3>Days: </h3>
          {matchedUser && <Days matchedDays={matchedUser.ride_days} />}
        </article>
      </section>
      <section className="route-container">
        <section className='route-details'>
          <div className='route-details__map-div'>
            <MapDisplay latLong={originLatLong} />
          </div>
          <div className='route-details__distance'>
            <h3>Origin Zip</h3>
            <p data-cy='origin-zip' className='route-details__miles'>{matchedUser?.user_rides[0].zipcode_origin}</p>
          </div>
        </section>
        <section className='route-details'>
          <div className='route-details__map-div'>
            <MapDisplay latLong={destinationLatLong} />
          </div>
          <div className='route-details__distance'>
            <h3>Destination Zip</h3>
            <p data-cy='destination-zip' className='route-details__miles'>{matchedUser?.user_rides[0].zipcode_destination}</p>
          </div>
        </section>
      </section>
      {matchedUser?.friendship_status[0] === 'approve/deny' && 
        <div className='profile__btn__container'>
          <button className='approve-deny btn' onClick={acceptFriendship}>Approve</button>
          <Link to='matched-routes'>
            <button className='approve-deny btn' onClick={denyFriendship}>Deny</button>
          </Link>
        </div>
      }
      {matchedUser?.friendship_status[0] !== 'approve/deny' && 
        <ProfileButton 
          friendStatus={matchedUser?.friendship_status} 
          email={matchedUser?.email}
          addFriend={addFriend}
        />
      }
    </div>
  )
}

export default DetailedRoute;
