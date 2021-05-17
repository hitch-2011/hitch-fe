import React, { FC } from 'react';


interface RouteData {
  routeId: number;
  name: string;
  distanceFromOrigin: string;
  distanceFromDestination: string;
  time: string;
  days: string[];
}

interface MatchedProps {
  routes: Array<RouteData>
}


const MatchedRoutes: FC<MatchedProps> = ({ routes }) => {

  const formatTime = (time: string): string => {
    let hour: string | any = time.split(':').shift();
    if (parseInt(hour) >= 12) {
      return 'pm'
    } else {
      return 'am'
    }
  }

  const routeCards = routes.map(route => {

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
      <h1 className='route-view__title'>Matched Routes ({routes.length})</h1>
      {routeCards}
    </section>
  )
}

export default MatchedRoutes;