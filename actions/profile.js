import * as Api from "../util/api"

export const RECEIVE_PROFILE = "RECEIVE_PROFILE"

export const receiveProfile = profile => ({ type: RECEIVE_PROFILE, profile })

export const fetchProfile = () => (dispatch, getState) =>
  Api.fetchProfile(getState().session).then(profile =>
    dispatch(receiveProfile(profile))
  )
