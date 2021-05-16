import React, { FC } from 'react';


interface RouteData {
  routeId: number;
  name: string;
  distanceFromOrigin: string;
  distanceFromDestination: string;
  time: string;
  days: Days[];
}

interface Days {
  day: string;
}

interface MatchedProps {
  allRoutes: Array<RouteData>
}


const MatchedRoutes: FC<MatchedProps> = ({ allRoutes }) => {

  const routeCards = allRoutes.map(route => {

    return (
      <section className='route-card' key={route.routeId}>
        <div>
          <p>{route.name}</p>
          <p>{route.time}</p>
          <p>{route.distanceFromOrigin}</p>
          <p>{route.distanceFromDestination}</p>
        </div>
      </section>
    )
  })

  return (
    <section className='route-card-view'>{routeCards}</section>
  )
}

export default MatchedRoutes;