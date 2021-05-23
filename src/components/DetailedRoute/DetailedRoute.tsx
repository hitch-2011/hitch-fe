// import React, {FC, Dispatch, SetStateAction} from 'react';
import { useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import { detailedRouteData } from '../../mockData';
import userPhoto from '../../assets/images/man.png';
import exampleMapOne from '../../assets/images/exampleMapOne.png';
import exampleMapTwo from '../../assets/images/exampleMapTwo.png';
import { getUserByID } from '../../apiCalls';

interface DetailedRouteProps {
  userId: string
}

const DetailedRoute: FC<DetailedRouteProps> = ({ userId }) => {

  useEffect(() => {
    getUserByID(parseInt(userId))
      .then(response => console.log(response))

  }, [userId])

  const days = detailedRouteData.route.days.map(day => {
    return (
      <div className='day'>
        {(day === 'tuesday' || day === 'thursday') ? day.charAt(0).toUpperCase() + day.slice(1, 2) : day.substring(0, 1).toUpperCase()}
      </div>
    )
  })

  return (
    <div className="detailed-route">
      <section className='header'>
        <Link className='header__back' to='matches'>
          <p> back </p>
        </Link>
        <img className='header__photo' src={userPhoto} alt={detailedRouteData.user.name} />
      </section>
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
        <section className='route-details'>
          <img className='route-details__map' src={exampleMapOne} alt='origin-map' />
          <div className='route-details__distance'>
            <h3>Distance away from Origin: </h3>
            <p>{detailedRouteData.route.distanceFromOrigin}</p>
          </div>
        </section>
        <section className='route-details'>
          <img className='route-details__map' src={exampleMapTwo} alt='destination-map' />
          <div className='route-details__distance'>
            <h3>Distance from Destination: </h3>
            <p className='route-details__miles'>{detailedRouteData.route.distanceFromDestination}</p>
          </div>
        </section>
      </section>
      <button className="registration__button btn">
        Request a Hitch
      </button>
    </div>
  )
}

export default DetailedRoute