import React, {useEffect, FC, useState} from 'react';
import { getPendingFriends } from '../../apiCalls';
import { Link } from 'react-router-dom';
import Days from '../Days/Days';
import { IoArrowRedoCircleOutline } from 'react-icons/io5';
import { formatTime } from '../../utilities/utilities';
import { VscLoading } from 'react-icons/vsc';

interface PendingProps {
  currentUserId: string
}

interface PendingFriend {
  id: string;
  type: string;
  attributes: {
    friendship_status: string;
    fullname: string;
    id: 6;
    ridedays: string[];
    ridetime: string
  }
}

const PendingFriends: FC<PendingProps> = ({currentUserId}) => {
  const [pendingFriends, setPendingFriends] = useState<PendingFriend[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
      getPendingFriends(parseInt(currentUserId))
        .then(response => {
          if(!response.message) {
            setPendingFriends(response.data);
          } else if (response.message[0] === "no received requests") {
            setError('You have no friends request')
          }         
        })
  }, [currentUserId])

  const friendRequests = pendingFriends.map(friend => {
    const { id, fullname, ridetime, ridedays } = friend.attributes;
    return (
      <Link to={`/${id}`} className='route-card' key={id} >
        <div className='route-card__name'>
          <p>{fullname}</p>
        </div>
        <div className='route-card__time'>
          <p className='route-card__detail'>Time</p>
          <p>{formatTime(ridetime)}</p>
        </div>
        <div className='route-card__origin'>
          <p className='route-card__detail'>Days</p>
          <Days matchedDays={ridedays} />
        </div>
        <IoArrowRedoCircleOutline className='route-card__arrow' />
      </ Link>
    )
  })

  return (
    <section className='route-view'>
      <h1 className='route-view__title'>Pending Friends</h1>
      {error && <h2 className="route-view__message">{error}</h2>}
      {!!friendRequests.length && !error && friendRequests}
      {!friendRequests.length && !error && <VscLoading className="loading-icon route-view__message" />}
    </section>    
  )
}

export default PendingFriends;
