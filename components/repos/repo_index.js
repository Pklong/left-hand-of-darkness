import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchRepos } from "../../actions/repos"

class RepoIndex extends Component {
  componentDidMount() {
    this.props.fetchRepos()
  }
  render() {
    const repos = this.props.repos.map(repo => {
      return <li key={repo.id}>{repo.name}</li>
    })
    return (
      <section>
        <ul>{repos}</ul>
      </section>
    )
  }
}

const mapStateToProps = ({ repos }) => ({
  repos
})

const mapDispatchToProps = dispatch => ({
  fetchRepos: () => dispatch(fetchRepos())
})

export default connect(mapStateToProps, mapDispatchToProps)(RepoIndex)
