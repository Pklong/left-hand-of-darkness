import { combineReducers } from "redux"
import session from "./session"
import profile from "./profile"
import repos from "./repos"
import issues from "./issues"

export default combineReducers({
  session,
  profile,
  repos,
  issues
})
