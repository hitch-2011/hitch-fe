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

  const routeCards = routes.map(route => {

    return (
      <section className='route-card' key={route.routeId}>
        <div className='route-card__name'>
          <p>Name</p>
          <p>{route.name}</p>
        </div>
        <div className='route-card__time'>
          <p>Time</p>
          <p>{route.time}</p>
        </div>
        <div className='route-card__origin'>
          <p>from orgin</p>
          <p>{route.distanceFromOrigin} mi</p>
        </div>
        <div className='route-card__destination'>
          <p>from destin.</p>
          <p>{route.distanceFromDestination} mi</p>
        </div>
      </section>
    )
  })

  return (
    <section className='route-card-view'>
      <h1>Matched Routes</h1>
      {routeCards}
    </section>
  )
}

export default MatchedRoutes;