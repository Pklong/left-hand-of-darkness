import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchProfile } from "../../actions/profile"
import RepoIndex from "../repos/repo_index"

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchProfile()
  }

  render() {
    const {
      profile: { name, avatar_url, bio, public_repos, repos_url }
    } = this.props
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
        <section>
          <RepoIndex />
        </section>
      </article>
    )
  }
}

const mapStateToProps = ({ profile }) => ({
  profile
})

const mapDispatchToProps = (dispatch, { token }) => ({
  fetchProfile: () => dispatch(fetchProfile(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
