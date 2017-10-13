import React, { Component } from 'react'
import reactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import config from './config'

class DisplayGithub extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    fetch()
  }
}

class FetchGithub extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accessToken: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/auth?code=' + this.props.code)
      .then(d => d.text())
      .then(accessToken => this.setState({ accessToken }))
      .catch(err => console.error(err))
  }
  render() {
    return <div>{this.state.accessToken}</div>
  }
}

const App = ({ location: { search } }) => {
  const queryString = `?client_id=${config.Client_ID}&scope=public_repo`
  if (search) {
    return <FetchGithub code={search.split('=')[1]} />
  } else {
    return (
      <div>
        <a href={`https://github.com/login/oauth/authorize${queryString}`}>
          Login
        </a>
      </div>
    )
  }
}

const Root = () => {
  return (
    <Router>
      <main>
        <h1>Left Hand of Darkness</h1>
        <Route exact path="/" component={App} />
      </main>
    </Router>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root')
  reactDOM.render(<Root />, root)
})

export default App
