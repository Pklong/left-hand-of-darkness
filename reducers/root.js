import { combineReducers } from "redux"
import session from "./session"
import profile from "./profile"
import repos from "./repos"

export default combineReducers({
  session,
  profile,
  repos
})
