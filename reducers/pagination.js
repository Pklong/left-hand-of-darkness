import { RECEIVE_REPOS, REQUEST_REPOS } from "../actions/repos"
import { combineReducers } from "redux"

const defaultPageIndex = {
  first: null,
  prev: null,
  next: null,
  last: null,
  current: 1
}

const pageIndex = (state = defaultPageIndex, action) => {
  if (action.type === RECEIVE_REPOS) {
    return Object.assign({}, state, action.pageNavigation)
  } else {
    return state
  }
}

const pages = (pages = {}, action) => {
  const newPages = Object.assign({}, pages)
  switch (action.type) {
    case REQUEST_REPOS:
      newPages[action.pageNavigation.current] = {
        urls: [],
        fetching: true
      }
      return newPages
    case RECEIVE_REPOS:
      newPages[action.pageNavigation.current] = {
        urls: action.repos.map(repo => repo.url),
        fetching: false
      }
      return newPages
    default:
      return pages
  }
}

export const currentPageRepos = (repos, pages, currentPageIndex) => {
  if (!pages[currentPageIndex]) return []
  return pages[currentPageIndex].urls.map(repoUrl => repos[repoUrl])
}

export default combineReducers({ pageIndex, pages })
