import React, { Component } from 'react'
import { connect } from 'react-redux'

import IssueItem from './issue_item.js'
import IssueForm from './issue_form.js'
import { fetchIssues } from '../../actions/issues'

class IssueIndex extends Component {
  componentDidMount() {
    this.props.fetchIssues(this.props.repo)
  }

  render() {
    const issues = this.props.issues.map(issue => (
      <li key={issue.id}>
        <IssueItem issue={issue} />
      </li>
    ))
    return (
      <article>
        <IssueForm repoName={this.props.repo.name} />
        <ul>{issues}</ul>
      </article>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    issues: state.repos[ownProps.repo.name].issues || []
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchIssues: repo => dispatch(fetchIssues(repo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueIndex)
