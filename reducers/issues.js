import { RECEIVE_ISSUES } from "../actions/issues"

const IssueReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ISSUES:
      const newState = Object.assign({}, state)
      action.issues.forEach(issue => (newState[issue.id] = issue))
      return newState
    default:
      return state
  }
}

export default IssueReducer
