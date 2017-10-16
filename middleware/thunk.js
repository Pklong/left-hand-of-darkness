export default function({ dispatch }) {
  return function(next) {
    return function(action) {
      if (typeof action === "function") {
        return action(dispatch)
      }
      return next(action)
    }
  }
}
