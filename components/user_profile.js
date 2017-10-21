import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchProfile } from "../actions/profile"

class UserProfile extends Component {
  componentDidMount() {
    const { fetchProfile } = this.props
    fetchProfile()
  }

  render() {
    const { profile: { name } } = this.props
    return <article>{name !== undefined ? name : "Loading..."}</article>
  }
}

const mapStateToProps = state => ({
  profile: state.profile
})

const mapDispatchToProps = (dispatch, { token }) => ({
  fetchProfile: () => dispatch(fetchProfile(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
