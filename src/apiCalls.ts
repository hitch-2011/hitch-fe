import { Z_STREAM_ERROR } from "zlib";

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

export const postUserInfo = (
  userInfo: UserData, 
  setId: React.Dispatch<React.SetStateAction<string>>,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  page: number
  ) => {
  return fetch(baseURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo)
  })
    .then(handleErrors)
    .then(response => {
      setId(response.data.id);
      setPage(page + 1);
      setError(false);
    })
    .catch(() => {
      setError(true);
      setPage(0);
    })
}

export const postCarInfo = (
  carInfo: CarData, 
  userId: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  page: number
  ) => {
  return fetch(`${baseURL}/${userId}/vehicles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(carInfo)
  })
    .then(handleErrors)
    .then(() => {
      setPage(page + 1);
      setError(false);
    })
    .catch(() => setError(true))
}

export const postRouteData = (
  routeInfo: RouteData,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
  return fetch(`https://afternoon-journey-49986.herokuapp.com/api/v1/users/${routeInfo.user_id}/rides`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(routeInfo)
  })
    .then(handleErrors)
    .then(() => {
      setError(false);
      setIsLoggedIn(true);
    })
    .catch(() => {
      setError(true);
      setPage(3);
    })
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