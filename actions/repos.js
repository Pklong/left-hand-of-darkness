import * as Api from "../util/api"

export const RECEIVE_REPOS = "RECEIVE_REPOS"
export const REQUEST_REPOS = "REQUEST_REPOS"

export const requestRepos = page => ({
  type: REQUEST_REPOS,
  page
})

export const receiveRepos = (repos, pageNavigation) => ({
  type: RECEIVE_REPOS,
  repos,
  pageNavigation
})

export const fetchRepos = currentPage => (dispatch, getState) =>
  Api.fetchRepos(getState().session, currentPage).then(res => {
    return dispatch(receiveRepos(res.repos, res.pageNavigation))
  })
