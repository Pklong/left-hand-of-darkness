import React, { Component } from "react"
import IssueIndex from "./issue_index.js"

class RepoItem extends Component {
  // TODO: loading straight from URL
  render() {
    const { repo, repo: { name, has_issues } } = this.props
    return (
      <section>
        <h3>{name}</h3>
        {has_issues ? <IssueIndex repo={repo} /> : null}
      </section>
    )
  }
}

export default RepoItem
