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
    name: 'Paige V',
    email: 'paigev@gmail.com',
    password: 'password',
    bio: 'This is an example bio.',
    photo: 'url'
  },
  car: {
    make: 'Honda',
    model: 'Civic',
    year: '2011'
  },
  route: {
    origin: '2199 S University Blvd, Denver, CO 80208',
    destination: '1850 Table Mesa Dr, Boulder, CO 80305',
    distanceFromOrigin: '0.5',
    distanceFromDestination: '1.2',
    time: '08:15',
    days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
  }
}