import React from "react"

const RepoNav = ({ index, fetchRepos }) => {
  const links = Object.keys(index)
    .filter(dir => index[dir])
    .filter(dir => index["current"] !== index[dir])
    .map(dir => {
      return (
        <button key={dir} onClick={fetchRepos.bind(null, index[dir])}>
          {dir}
        </button>
      )
    })
  return <nav>{links}</nav>
}

export default RepoNav
