import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchRepos } from '../../actions/repos'
import { currentPageRepos } from '../../reducers/pagination'

import RepoItem from './repo_item'
import RepoNav from './repo_nav'

//TODO: Don't fetch if not authenticated
// better validation of query string

class RepoIndex extends Component {
  componentDidMount() {
    const { fetchRepos, location: { search } } = this.props
    const page = search.startsWith('?page=') ? search.split('=')[1] : 1
    fetchRepos(page)
  }
  componentWillReceiveProps({ location: { search: queryPage } }) {
    const { fetchRepos, location: { search: currentPage } } = this.props
    if (currentPage !== queryPage && queryPage.startsWith('?page=')) {
      const page = queryPage.split('=')[1] || 1
      fetchRepos(page)
    }
  }
  render() {
    const { repos, fetchRepos, pageIndex } = this.props
    const repoArray = repos.map(repo => {
      return (
        <li key={repo.id}>
          <Link to={`repos/${repo.name}/issues`}>
            <h3>{repo.name}</h3>
            <p>Open Issues: {repo.open_issues_count}</p>
          </Link>
        </li>
      )
    })
    return (
      <article>
        <ul>{repoArray}</ul>
        <RepoNav fetchRepos={fetchRepos} index={pageIndex} />
      </article>
    )
  }
}

const mapStateToProps = (
  { repos, pagination: { pages, pageIndex } },
  { location: { search } }
) => {
  const page = search.split('=')[1] || 1
  return {
    repos: currentPageRepos(repos, pages, page),
    pageIndex
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRepos: page => dispatch(fetchRepos(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(RepoIndex)
