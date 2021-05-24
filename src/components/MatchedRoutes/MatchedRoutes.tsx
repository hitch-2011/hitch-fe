import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMatchedRides } from '../../apiCalls';

interface RouteData {
  id: number;
  user_name: string;
  distance_from_origin: string;
  distance_from_destination: string;
  departure_time: string;
  days: string[];
}

interface MatchedProps {
  currentUserId: string
}


const MatchedRoutes: FC<MatchedProps> = ({ currentUserId }) => {
  const [matchedRoutes, setMatchedRoutes] = useState<RouteData[]>([])

  const formatTime = (time: string): string => {
    let hour: string = time.split(':')[0];
    if (parseInt(hour) >= 12) {
      return 'pm'
    } else {
      return 'am'
    }
  }

  useEffect(() => {
    getMatchedRides(parseInt(currentUserId))
      .then(response => {
        console.log(response)
        setMatchedRoutes(response.data.attributes.matched_routes)
      })
  }, [currentUserId])

  const validRoutes = matchedRoutes.filter(route => route.id.toString() !== currentUserId)
  console.log(validRoutes)
  const routeCards = validRoutes.map(route => {

    return (
      // <section className='route-card' key={route.id} id={route.id.toString()}>
      <Link to={`/${route.id}`} className='route-card' key={route.id} id={route.id.toString()}>
        <div className='route-card__name'>
          <p className='route-card__detail'>Name</p>
          <p>{route.user_name}</p>
        </div>
        <div className='route-card__time'>
          <p className='route-card__detail'>Time</p>
          <p>{route.departure_time} {formatTime(route.departure_time)}</p>
        </div>
        <div className='route-card__origin'>
          <p className='route-card__detail'>from orgin</p>
          <p>{route.distance_from_origin} mi</p>
        </div>
        <div className='route-card__destination'>
          <p className='route-card__detail'>from destin.</p>
          <p>{route.distance_from_destination} mi</p>
        </div>
      </ Link>
    )
  })

  return (
    <section className='route-view'>
      <h1 className='route-view__title'>Matched Routes ({validRoutes.length})</h1>
      {!!validRoutes.length && routeCards}
      {!validRoutes.length && <h1>Loading...</h1>}
    </section>
  )
}

export default MatchedRoutes;