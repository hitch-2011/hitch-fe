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
        <div className='route-card__info'>
          <p>Name</p>
          <p>Time</p>
          <p>Dist. from Org.</p>
          <p>Dist from Dest.</p>
        </div>
        <div className='route-card__stats'>
          <p>{route.name}</p>
          <p>{route.time}</p>
          <p>{route.distanceFromOrigin}</p>
          <p>{route.distanceFromDestination}</p>
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