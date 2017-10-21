import * as API_UTIL from "../util/api"

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"

export const loginUser = token => {
  return {
    type: LOGIN,
    token
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT
  }
}

export const login = code => dispatch => {
  return API_UTIL.loginUser(code)
    .then(token => token.text())
    .then(token => {
      window.localStorage.setItem("gh_token", token)
      return dispatch(loginUser(token))
    })
}
