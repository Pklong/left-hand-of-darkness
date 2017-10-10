import React, { Component } from "react"
import reactDOM from "react-dom"
import config from "./config"

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
    this.fetchGithub = this.fetchGithub.bind(this)
  }

  setChange(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }
  fetchGithub(e) {
    e.preventDefault()
    fetch("https://api.github.com/zen")
      .then(res => res.text())
      .then(data => console.log(data))
  }
  render() {
    return (
      <form onSubmit={this.fetchGithub}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={this.setChange("username")}
          value={this.state.username}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={this.setChange("password")}
          value={this.state.password}
        />
        <input type="submit" value="Access Github" />
      </form>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root")
  reactDOM.render(<App />, root)
})

export default App
