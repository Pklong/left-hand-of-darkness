import * as Api from "../util/api"

export const RECEIVE_ISSUES = "RECEIVE_ISSUES"

export const receiveIssues = issues => {
  return {
    type: RECEIVE_ISSUES,
    issues
  }
}

export const fetchIssues = repo => (dispatch, getState) => {
  return Api.fetchIssues(getState().session, repo)
    .then(issues => dispatch(receiveIssues(issues)))
    .catch(err => console.error(err))
}
