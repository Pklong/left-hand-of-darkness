import React, { Component } from 'react'
import { connect } from 'react-redux'
import IssueIndex from './issue_index.js'
import { fetchProfile } from '../../actions/profile'
import { fetchRepo } from '../../actions/repos'

class RepoItem extends Component {
  componentDidMount() {
    const { username } = this.props
    if (username === undefined) {
      this.props.fetchProfile()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      !this.props.repo ||
      nextProps.repo.name !== this.props.repo.name
    ) {
      this.props.fetchRepo(this.props.match.params.repoName)
    }
  }

  render() {
    const { repo } = this.props
    if (!repo) {
      return <section>Loading...</section>
    }

    return (
      <section>
        <h3>Repo {repo.name}</h3>
        {repo.has_issues ? (
          <IssueIndex repo={repo} />
        ) : (
          <p>No Issues</p>
        )}
      </section>
    )
  }
}

const mapStateToProps = (
  { profile: login, repos },
  { match: { params: { repoName } } }
) => {
  return { username: login, repo: repos[repoName] }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: () => dispatch(fetchProfile()),
    fetchRepo: name => dispatch(fetchRepo(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoItem)
