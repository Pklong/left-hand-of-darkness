import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchRepos } from "../../actions/repos"
import IssueIndex from "./issue_index.js"

class RepoIndex extends Component {
  componentDidMount() {
    this.props.fetchRepos()
  }
  render() {
    const repos = this.props.repos.map(repo => {
      //          <IssueIndex repo={repo} />
      return (
        <li key={repo.id}>
          <p>{repo.name}</p>
        </li>
      )
    })
    return (
      <section>
        <ul>{repos}</ul>
      </section>
    )
  }
}

const mapStateToProps = ({ repos }) => ({
  repos: Object.keys(repos).map(repo => repos[repo])
})

const mapDispatchToProps = dispatch => ({
  fetchRepos: () => dispatch(fetchRepos())
})

export default connect(mapStateToProps, mapDispatchToProps)(RepoIndex)
