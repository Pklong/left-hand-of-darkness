export const loginUser = code => {
  return fetch(`http://localhost:8080/auth?code=${code}`)
}

export const fetchProfile = token => {
  return fetch(`https://api.github.com/user?access_token=${token}`)
    .then(data => data.json())
    .catch(err => console.err(err))
}
