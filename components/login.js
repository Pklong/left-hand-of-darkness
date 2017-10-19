import React from "react"
import { Client_ID } from "../util/config"

const Login = () => {
  const queryString = `?client_id=${Client_ID}&scope=public_repo`
  return (
    <a href={`https://github.com/login/oauth/authorize${queryString}`}>Login</a>
  )
}

export default Login
