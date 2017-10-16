import * as API_UTIL from "../util/api"

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"

export const loginUser = user => {
  return {
    type: LOGIN,
    user
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT
  }
}

export const login = code => dispatch => {
  return API_UTIL.loginUser(code)
    .then(user => user.text())
    .then(user => dispatch(loginUser(user)))
}
