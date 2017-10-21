import React, { Component } from "react"
import reactDOM from "react-dom"
import createStore from "./store/store"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"

import App from "./components/left_hand"

const Root = () => {
  const token = window.localStorage.getItem("gh_token")
  const store = token ? createStore({ session: token }) : createStore()
  return (
    <Router>
      <Provider store={store}>
        <main>
          <h1>Left Hand of Darkness</h1>
          <Route exact path="/" component={App} />
        </main>
      </Provider>
    </Router>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root")

  reactDOM.render(<Root />, root)
})
