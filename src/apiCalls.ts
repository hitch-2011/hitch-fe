interface UserData {
  email: string;
  password: string;
  fullname: string;
  bio: string;
}

interface RouteData {
  origin: string;
  destination: string;
  time: string;
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
  return fetch(`https://afternoon-journey-49986.herokuapp.com/api/v1/users/1/rides`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(routeInfo)
  })
    .then(response => response.json())
}