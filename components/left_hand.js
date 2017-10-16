import React, { Component } from "react"
import { connect } from "react-redux"
import Login from "./login"
import UserProfile from "./user_profile"

import { login as loginUser } from "../actions/session"

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { location: { search } } = this.props
    if (search.startsWith("?code")) {
      this.props
        .login(search.split("=")[1])
        .then(() => this.props.history.push("/"))
        .catch(err => console.error(err))
    }
  }
  render() {
    const token = this.props.loggedIn
    console.log(token)
    return token ? <UserProfile token={token} /> : <Login />
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: code => dispatch(loginUser(code))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
