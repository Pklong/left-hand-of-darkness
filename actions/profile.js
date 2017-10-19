import * as Api from "../util/api"

export const RECEIVE_PROFILE = "RECEIVE_PROFILE"

export const receiveProfile = profile => ({ type: RECEIVE_PROFILE, profile })

export const fetchProfile = token => dispatch =>
  Api.fetchProfile(token).then(profile => dispatch(receiveProfile(profile)))
