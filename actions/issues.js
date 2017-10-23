import * as Api from "../util/api"

export const RECEIVE_ISSUES = "RECEIVE_ISSUES"

export const receiveIssues = (issues, repoUrl) => {
  return {
    type: RECEIVE_ISSUES,
    issues,
    repoUrl
  }
}

export const fetchIssues = repo => (dispatch, getState) => {
  return Api.fetchIssues(getState().session, repo)
    .then(issues => dispatch(receiveIssues(issues, repo.url)))
    .catch(err => console.error(err))
}
