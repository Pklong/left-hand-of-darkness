import * as Api from '../util/api'

export const RECEIVE_ISSUES = 'RECEIVE_ISSUES'
export const RECEIVE_ISSUE = 'RECEIVE_ISSUE'

export const receiveIssues = (issues, repoName) => {
  return {
    type: RECEIVE_ISSUES,
    issues,
    repoName
  }
}

export const receiveIssue = (issue, repoName) => {
  return {
    type: RECEIVE_ISSUE,
    issue,
    repoName
  }
}

export const createIssue = (issue, repo) => (dispatch, getState) => {
  return Api.createIssue(
    getState().session,
    issue,
    repo,
    getState().profile.login
  )
    .then(issue => dispatch(receiveIssue(issue, repo)))
    .catch(err => console.error(err))
}

export const fetchIssues = repo => (dispatch, getState) => {
  return Api.fetchIssues(getState().session, repo)
    .then(issues => dispatch(receiveIssues(issues, repo.name)))
    .catch(err => console.error(err))
}
