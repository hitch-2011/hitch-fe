export const postUserInfo = (userInfo) => {
  return fetch('', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo)
  })
    .then(response => response.json())
}