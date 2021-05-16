let userData = {
  user: {
    name: '',
    email: '',
    password: '',
    bio: ''
  },
  car: {
    make: '',
    model: '',
    year: ''
  },
  route: {
    origin: '',
    destination: '',
    time: '',
    days: ['']
  }
}

let routeData = {
  allRoutes: [
    {
      routeId: 1,
      name: 'Steven M',
      distanceFromOrigin: '.5',
      distanceFromDestination: '1',
      time: '08:00',
      days: ['monday', 'wednesday', 'friday']
    },
    {
      routeId: 2,
      name: 'Alex T',
      distanceFromOrigin: '1.2',
      distanceFromDestination: '0.3',
      time: '17:00',
      days: ['monday','tuesday', 'wednesday', 'thursday', 'friday']
    }
  ]
}

let detailedRouteData = {
  user: {
    name: '',
    email: '',
    password: '',
    bio: '',
    photo: ''
  },
  car: {
    make: '',
    model: '',
    year: ''
  },
  route: {
    origin: '',
    destination: '',
    distanceFromOrigin: '',
    distanceFromDestination: '',
    time: '',
    days: ['']
  }
}