import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMatchedRides } from '../../apiCalls';
import Days from '../Days/Days';

interface RouteData {
  id: number;
  user_name: string;
  distance_from_origin: string;
  distance_from_destination: string;
  departure_time: string;
  days: string[];
  user_id: number;
  ridedays: string[];
}

interface MatchedProps {
  currentUserId: string
}


const MatchedRoutes: FC<MatchedProps> = ({ currentUserId }) => {
  const [matchedRoutes, setMatchedRoutes] = useState<RouteData[]>([])
  const [error, setError] = useState('')

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
        if (response.data === 'You are our first route in those areas! We will find a hitch for you soon!') {
          setError('No matches found')
        } else {
          console.log(response)
          setMatchedRoutes(response.data.attributes.matched_routes)
        }
      })
  }, [currentUserId])

  const validRoutes = matchedRoutes.filter(route => route.user_id.toString() !== currentUserId)
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
          <p className='route-card__detail'>Days</p>
          <Days matchedDays={route.ridedays} />
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
      {error && <h2>{error}</h2>}
      {!!validRoutes.length && !error && routeCards}
      {!validRoutes.length && !error && <h1>Loading...</h1>}
    </section>
  )
}

export default MatchedRoutes;