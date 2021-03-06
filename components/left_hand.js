import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './login'
import UserProfile from './profile/user_profile'

import { login as loginUser } from '../actions/session'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { location: { search } } = this.props
    if (search.startsWith('?code')) {
      // redirect callback with authentication code
      this.props
        .login(search.split('=')[1])
        .then(() => this.props.history.push('/repos'))
        .catch(err => console.error(err))
    }
  }
  render() {
    const { token } = this.props
    return token ? <UserProfile /> : <Login />
  }
}

const mapStateToProps = ({ session }) => {
  return {
    token: session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: code => dispatch(loginUser(code))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
