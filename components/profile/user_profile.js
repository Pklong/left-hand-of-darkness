import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchProfile } from '../../actions/profile'
import RepoIndex from '../repos/repo_index'

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchProfile()
  }

  render() {
    const { profile: { name, avatar_url, bio } } = this.props
    if (name === undefined) return null

    return (
      <article>
        <section>
          <figure>
            <img src={avatar_url} alt={name} />
            <figcaption>{name}</figcaption>
          </figure>
          <p>{bio}</p>
        </section>
      </article>
    )
  }
}

const mapStateToProps = ({ profile }) => {
  return {
    profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: () => dispatch(fetchProfile())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
