import React from "react"
import { connect } from "react-redux"
import { Redirect, Route, withRouter } from "react-router-dom"

const AuthRoute = ({ component, loggedIn, ...props }) => {
  if (loggedIn) {
    return <Route {...props} component={component} />
  } else {
    return <Redirect exact from={props.path} to={"/"} />
  }
}

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session)
})

export default withRouter(connect(mapStateToProps, null)(AuthRoute))
