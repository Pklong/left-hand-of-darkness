export const loginUser = code => {
  return fetch(`http://localhost:8080/auth?code=${code}`)
}

const addTokenToUrl = url => token => `${url}?access_token=${token}`

export const fetchProfile = token => {
  return fetch(addTokenToUrl("https://api.github.com/user")(token))
    .then(data => data.json())
    .catch(err => console.err(err))
}

export const fetchRepos = token => {
  return fetch(addTokenToUrl(`https://api.github.com/user/repos`)(token))
    .then(data => data.json())
    .catch(err => console.err(err))
}
