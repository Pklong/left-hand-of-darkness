import React, { Component } from 'react'
import reactDOM from 'react-dom'
import createStore from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthRoute from './components/util/auth_route'

import App from './components/left_hand'
import RepoIndex from './components/repos/repo_index'
import RepoItem from './components/repos/repo_item'

const Root = () => {
  const token = window.localStorage.getItem('gh_token')
  const store = token ? createStore({ session: token }) : createStore()
  return (
    <Router>
      <Provider store={store}>
        <main>
          <h1>Left Hand of Darkness</h1>
          <Route path="/" component={App} />
          <AuthRoute exact path="/repos" component={RepoIndex} />
          <AuthRoute
            exact
            path="/repos/:repoName/issues"
            component={RepoItem}
          />
        </main>
      </Provider>
    </Router>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root')
  reactDOM.render(<Root />, root)
})
