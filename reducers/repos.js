import { RECEIVE_REPO, RECEIVE_REPOS } from '../actions/repos'
import { RECEIVE_ISSUES } from '../actions/issues'

export default (state = {}, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_REPOS:
      action.repos.forEach(repo => {
        newState[repo.name] = repo
      })
      return newState
    case RECEIVE_REPO:
      newState[action.repo.name] = action.repo
      return newState
    case RECEIVE_ISSUES:
      const { issues, repoName } = action
      newState[repoName].issues = issues
      return newState

    default:
      return state
  }
}
