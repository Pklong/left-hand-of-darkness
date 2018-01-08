import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createIssue } from '../../actions/issues'

class IssueForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props
      .createIssue(this.state, this.props.repoName)
      .then(() => this.setState({ title: '', body: '' }))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange('title')}
        />
        <input
          type="text"
          value={this.state.body}
          onChange={this.handleChange('body')}
        />
        <input type="submit" value={'create new issue'} />
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    createIssue: (issue, repoName) =>
      dispatch(createIssue(issue, repoName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueForm)
