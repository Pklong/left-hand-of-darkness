import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchProfile } from "../../actions/profile"
import RepoIndex from "../repos/repo_index"

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchProfile()
  }

  render() {
    const { profile: { name, avatar_url, bio, public_repos } } = this.props
    if (name === undefined) return null
    return (
      <article>
        <section>
          <figure>
            <img src={avatar_url} alt={name} />
            <figcaption>{name}</figcaption>
          </figure>
          <p>{bio}</p>
          <p>{public_repos}</p>
        </section>
        <section>
          <RepoIndex />
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
