import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchRepos } from "../../actions/repos"
import { currentPageRepos } from "../../reducers/pagination"
import IssueIndex from "./issue_index.js"
import RepoNav from "./repo_nav"

class RepoIndex extends Component {
  componentDidMount() {
    const { fetchRepos, pageIndex: { current } } = this.props
    fetchRepos(current)
  }
  render() {
    const { repos, fetchRepos, pageIndex } = this.props
    const repoArray = repos.map(repo => {
      //          <IssueIndex repo={repo} />
      return (
        <li key={repo.id}>
          <p>{repo.name}</p>
        </li>
      )
    })
    return (
      <section>
        <ul>{repoArray}</ul>
        <RepoNav fetchRepos={fetchRepos} index={pageIndex} />
      </section>
    )
  }
}

const mapStateToProps = ({ repos, pagination: { pages, pageIndex } }) => {
  return {
    repos: currentPageRepos(repos, pages, pageIndex.current),
    pageIndex
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRepos: page => dispatch(fetchRepos(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(RepoIndex)
