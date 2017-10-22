import { RECEIVE_REPOS } from "../actions/repos"

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_REPOS:
      return action.repos
    default:
      return state
  }
}
