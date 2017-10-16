import { LOGIN, LOGOUT } from "../actions/session"

const initialState = null

const session = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.user
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default session
