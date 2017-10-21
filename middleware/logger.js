export default function(store) {
  return function(next) {
    return function(action) {
      console.log("Before: ", store.getState())
      console.log("Action: ", action)
      const newState = next(action)
      console.log("After: ", store.getState())
      return newState
    }
  }
}
