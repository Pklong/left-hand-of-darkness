import * as Api from '../util/api'

export const RECEIVE_REPOS = 'RECEIVE_REPOS'
export const RECEIVE_REPO = 'RECEIVE_REPO'
export const REQUEST_REPOS = 'REQUEST_REPOS'

export const requestRepos = page => ({
  type: REQUEST_REPOS,
  page
})

export const receiveRepos = (repos, pageNavigation) => ({
  type: RECEIVE_REPOS,
  repos,
  pageNavigation
})

export const receiveRepo = repo => ({
  type: RECEIVE_REPO,
  repo
})

export const fetchRepos = currentPage => (dispatch, getState) =>
  Api.fetchRepos(getState().session, currentPage).then(res => {
    return dispatch(receiveRepos(res.repos, res.pageNavigation))
  })

export const fetchRepo = repoName => (dispatch, getState) => {
  const { session, profile: { login: username } } = getState()
  return Api.fetchRepo(session, username, repoName).then(repo =>
    dispatch(receiveRepo(repo))
  )
}
