import * as Api from "../util/api"

export const RECEIVE_REPOS = "RECEIVE_REPOS"

export const receiveRepos = repos => ({
  type: RECEIVE_REPOS,
  repos
})

export const fetchRepos = user => (dispatch, getState) =>
  Api.fetchRepos(getState().session, user).then(repos =>
    dispatch(receiveRepos(repos))
  )
