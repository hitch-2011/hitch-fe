import React, { FC, FormEvent } from 'react';


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


const MatchedRoutes = () => {

  return (
    <h1>hello</h1>
  )
}

export default MatchedRoutes;