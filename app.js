import React, { Component } from "react"
import reactDOM from "react-dom"
import config from "./config"

class App extends Component {
  constructor() {
    super()
  }
  render() {
    const queryString = `?client_id=${config.Client_ID}&scope=public_repo`
    return (
      <div>
        <a href={`https://github.com/login/oauth/authorize${queryString}`}>
          Login
        </a>
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root")
  reactDOM.render(<App />, root)
})

export default App
