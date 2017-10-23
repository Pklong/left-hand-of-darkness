import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchIssues } from "../../actions/issues"

class IssueIndex extends Component {
  componentDidMount() {
    this.props.fetchIssues(this.props.repo)
  }

  render() {
    const issues = this.props.issues.map(issue => <li>{issue.title}</li>)
    return <ul>{issues}</ul>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    issues: state.repos[ownProps.repo.url].issues || []
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchIssues: repo => dispatch(fetchIssues(repo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueIndex)
