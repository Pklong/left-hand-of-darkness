import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers/root"
import thunk from "../middleware/thunk"

export default function() {
  return createStore(rootReducer, {}, applyMiddleware(thunk))
}
