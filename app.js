import React, { Component } from "react"
import reactDOM from "react-dom"

const App = () => <h1>Hello World</h1>

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root")
  reactDOM.render(<App />, root)
})

export default App
