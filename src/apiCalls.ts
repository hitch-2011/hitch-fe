interface UserData {
  email: string;
  password: string;
  fullname: string;
  bio: string;
}

interface RouteData {
  orgin: string;
  destination: string;
  time: string;
  days: Array<string>;
}

export const postUserInfo = (userInfo: UserData) => {
  return fetch('', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo)
  })
    .then(response => response.json())
}

export const postRouteData = (routeInfo: RouteData) => {
  return fetch('', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(routeInfo)
  })
    .then(response => response.json())
}