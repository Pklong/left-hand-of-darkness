import { RECEIVE_REPOS } from "../actions/repos"
import { RECEIVE_ISSUES } from "../actions/issues"

export default (state = {}, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_REPOS:
      action.repos.forEach(repo => {
        newState[repo.url] = repo
      })
      return newState

    case RECEIVE_ISSUES:
      if (action.issues.length === 0) {
        return newState
      }
      newState[action.issues[0].repository_url].issues = action.issues
      return newState

    default:
      return state
  }
}
