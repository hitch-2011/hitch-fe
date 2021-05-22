import React, { FC, useEffect, useState } from 'react';
import { getMatchedRides } from '../../apiCalls';


interface RouteData {
  routeId: number;
  name: string;
  distanceFromOrigin: string;
  distanceFromDestination: string;
  time: string;
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
        setMatchedRoutes(response)
      })

  }, [])


  const routeCards = matchedRoutes.map(route => {

    return (
      <section className='route-card' key={route.routeId}>
        <div className='route-card__name'>
          <p className='route-card__detail'>Name</p>
          <p>{route.name}</p>
        </div>
        <div className='route-card__time'>
          <p className='route-card__detail'>Time</p>
          <p>{route.time} {formatTime(route.time)}</p>
        </div>
        <div className='route-card__origin'>
          <p className='route-card__detail'>from orgin</p>
          <p>{route.distanceFromOrigin} mi</p>
        </div>
        <div className='route-card__destination'>
          <p className='route-card__detail'>from destin.</p>
          <p>{route.distanceFromDestination} mi</p>
        </div>
      </section>
    )
  })

  return (
    <section className='route-view'>
      <h1 className='route-view__title'>Matched Routes ({matchedRoutes.length})</h1>
      {routeCards}
    </section>
  )
}

export default MatchedRoutes;