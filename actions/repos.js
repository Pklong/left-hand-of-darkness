import * as Api from "../util/api"

export const RECEIVE_REPOS = "RECEIVE_REPOS"

export const receiveRepos = repos => ({
  type: RECEIVE_REPOS,
  repos
})

export const fetchRepos = () => (dispatch, getState) =>
  Api.fetchRepos(getState().session).then(repos =>
    dispatch(receiveRepos(repos))
  )
