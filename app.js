import React, { Component } from "react"
import reactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom"
import { Client_ID } from "./util/api"

import UserProfile from "./components/user_profile"

const Login = () => {
  const queryString = `?client_id=${Client_ID}&scope=public_repo`
  return (
    <a href={`https://github.com/login/oauth/authorize${queryString}`}>Login</a>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accessToken: null
    }
  }

  componentDidMount() {
    const { location: { search } } = this.props
    if (search.startsWith("?code")) {
      fetch("http://localhost:8080/auth?code=" + search.split("=")[1])
        .then(d => d.text())
        .then(accessToken => this.setState({ accessToken }))
        .catch(err => console.error(err))
    }
  }
  render() {
    const token = this.state.accessToken
    return token ? <UserProfile token={token} /> : <Login />
  }
}

const Root = () => {
  return (
    <Router>
      <main>
        <h1>Left Hand of Darkness</h1>
        <Route exact path="/" component={App} />
        <Route exact path="/" component={Profile} />
      </main>
    </Router>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root")
  reactDOM.render(<Root />, root)
})

export default App
