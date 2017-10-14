import React, { Component } from "react"
import reactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom"
import config from "./config"

class DisplayGithub extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/user?access_token=" + this.props.token)
      .then(u => u.json())
      .then(d => this.setState({ user: d }))
  }

  render() {
    if (this.state.user === null) {
      return false
    }
    const { avatar_url, login } = this.state.user

    return (
      <article>
        <h1>{login}</h1>
        <img src={avatar_url} />
      </article>
    )
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
    fetch("http://localhost:8080/auth?code=" + this.props.code)
      .then(d => d.text())
      .then(accessToken => this.setState({ accessToken }))
      .catch(err => console.error(err))
  }
  render() {
    if (this.state.accessToken) {
      return <DisplayGithub token={this.state.accessToken} />
    } else {
      return null
    }
  }
}

const Auth = ({ component: Component, path, location: { search } }) => {
  return (
    <Route
      path={path}
      render={props =>
        search.startsWith("?code") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )}
    />
  )
}

const App = ({ location: { search } }) => {
  const queryString = `?client_id=${config.Client_ID}&scope=public_repo`
  if (search.startsWith("?code")) {
    return <FetchGithub code={search.split("=")[1]} />
  } else {
    return (
      <a href={`https://github.com/login/oauth/authorize${queryString}`}>
        Login
      </a>
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

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root")
  reactDOM.render(<Root />, root)
})

export default App
