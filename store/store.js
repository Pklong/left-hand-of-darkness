import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers/root"
import thunk from "../middleware/thunk"
import logger from "../middleware/logger"

export default function(preloadedState = {}) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
}
