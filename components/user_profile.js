import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchProfile } from "../actions/profile"

class UserProfile extends Component {
  componentDidMount() {
    const { fetchProfile, token } = this.props
    fetchProfile(token)
  }

  render() {
    const { profile: { name } } = this.props
    debugger
    return <article>{name !== undefined ? name : "Loading..."}</article>
  }
}

const mapStateToProps = state => ({
  profile: state.profile
})

const mapDispatchToProps = dispatch => ({
  fetchProfile: token => dispatch(fetchProfile(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
