interface UserData {
  email: string;
  password: string;
  fullname: string;
  bio: string;
  make: string;
  model: string;
  year: string;
}

interface RouteData {
  user_id: string;
  origin: string;
  destination: string;
  departure_time: string;
  days: string[];
}

export const postUserInfo = (userInfo: UserData) => {
  return fetch(`https://afternoon-journey-49986.herokuapp.com/api/v1/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo)
  })
    .then(response => response.json())
}

export const postRouteData = (routeInfo: RouteData) => {
  return fetch(`https://afternoon-journey-49986.herokuapp.com/api/v1/users/3/rides`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(routeInfo)
  })
    .then(response => response.json())
}

export const getMatchedRides = (id: number) => {
  return fetch(`https://afternoon-journey-49986.herokuapp.com/api/v1/users/${id}/rides`)
    .then(response => response.json())
}