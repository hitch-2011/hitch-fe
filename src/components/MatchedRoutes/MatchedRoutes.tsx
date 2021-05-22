import React, { FC, useEffect, useState } from 'react';
import { getMatchedRides } from '../../apiCalls';
import { routeData } from '../../mockData';


interface RouteData {
  id: number;
  name: string;
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

  }, [])


  const routeCards = matchedRoutes.map(route => {
    console.log(matchedRoutes)
    return (
      <section className='route-card' key={route.id} id={route.id.toString()}>
        <div className='route-card__name'>
          <p className='route-card__detail'>Name</p>
          {/* <p>{route.name}</p> */}
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
      </section>
    )
  })

  return (
    <section className='route-view'>
      <h1 className='route-view__title'>Matched Routes ({matchedRoutes.length})</h1>
      {matchedRoutes.length && routeCards}
      {!matchedRoutes.length && <h1>No matched routes yet!</h1>}
    </section>
  )
}

export default MatchedRoutes;