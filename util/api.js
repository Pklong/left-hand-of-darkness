// TODO: Assumes local server for POST request to GitHub
export const loginUser = code => {
  return fetch(`http://localhost:8080/auth?code=${code}`)
}
// make general function to add querystring to url
const addTokenToUrl = url => token => `${url}?access_token=${token}`
const addPageToUrl = url => page => `${url}&page=${page}`

// TODO: assumes rel=next metadata is always first
const REGEXP = new RegExp(/page=(\d+)/)
const parseLinkHeader = link => REGEXP.exec(link)[1]

// transform link header into object with directions pointing to url, ex. {next: 'url-for-next-page'}
const segmentLinkHeader = link => {
  if (!link) return {}

  return link
    .split(",")
    .map(seg => seg.split(";").map(s => s.trim()))
    .reduce((acc, seg) => {
      const dir = seg[1].split('"')[1]
      acc[dir] = parseLinkHeader(seg[0])
      return acc
    }, {})
}

export const fetchProfile = token => {
  return fetch(addTokenToUrl("https://api.github.com/user")(token))
    .then(data => data.json())
    .catch(err => console.error(err))
}

export const fetchRepos = (token, page) => {
  return fetch(
    addPageToUrl(addTokenToUrl(`https://api.github.com/user/repos`)(token))(
      page
    )
  )
    .then(data => {
      // response returns two kinds of information (pagination and data) which feels bad?
      const link = data.headers.get("Link")
      const pageNavigation = segmentLinkHeader(link)
      pageNavigation.current = String(page)
      return data.json().then(repos => ({
        repos,
        pageNavigation
      }))
    })
    .catch(err => console.error(err))
}

export const fetchIssues = (token, { name, owner: { login } }) => {
  // remove state=all
  return fetch(
    addTokenToUrl(`https://api.github.com/repos/${login}/${name}/issues`)(
      token
    ) + "&state=all"
  )
    .then(data => data.json())
    .catch(err => console.error(err))
}
