interface UserData {
  email: string;
  password: string;
  fullname: string;
  bio: string;
}

interface CarData {
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

const baseURL = 'https://afternoon-journey-49986.herokuapp.com/api/v1/users'

export const postUserInfo = (userInfo: UserData) => {
  return fetch(baseURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo)
  })
    .then(handleErrors)
}

export const postCarInfo = (carInfo: CarData, userId: number) => {
  return fetch(`${baseURL}/${userId}/vehicles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(carInfo)
  })
}

export const postRouteData = (routeInfo: RouteData) => {
  return fetch(`https://afternoon-journey-49986.herokuapp.com/api/v1/users/${routeInfo.user_id}/rides`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(routeInfo)
  })
    .then(handleErrors)
}

export const getMatchedRides = (id: number) => {
  return fetch(`https://afternoon-journey-49986.herokuapp.com/api/v1/users/${id}/rides`)
    .then(response => response.json())
}

export const getUserByID = (id: number) => {
  return fetch(`https://afternoon-journey-49986.herokuapp.com/api/v1/users/${id}`)
    .then(response => response.json())
}


const handleErrors = (response: Response) => {
  if(!response.ok) {
    throw new Error(`${response.status}`)
  }
  return response.json()
}