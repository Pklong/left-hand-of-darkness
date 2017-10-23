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
      const { issues, repoUrl } = action
      newState[repoUrl].issues = issues
      return newState

    default:
      return state
  }
}
