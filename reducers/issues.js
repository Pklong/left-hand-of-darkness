import { RECEIVE_ISSUES, RECEIVE_ISSUE } from '../actions/issues'

const IssueReducer = (state = {}, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ISSUES:
      action.issues.forEach(issue => (newState[issue.id] = issue))
      return newState
    case RECEIVE_ISSUE:
      newState[action.issue.id] = action.issue
      return newState
    default:
      return state
  }
}

export default IssueReducer
