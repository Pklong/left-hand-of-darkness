import React from "react"
import { Link } from "react-router-dom"

const RepoNav = ({ index, fetchRepos }) => {
  const links = Object.keys(index)
    .filter(dir => index[dir])
    .filter(dir => index["current"] !== index[dir])
    .map(dir => {
      return (
        <Link key={dir} to={`?page=${index[dir]}`}>
          {dir}
        </Link>
      )
    })
  return <nav>{links}</nav>
}

export default RepoNav
