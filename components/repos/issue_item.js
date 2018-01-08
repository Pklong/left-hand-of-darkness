import React from 'react'

const IssueItem = ({ issue }) => {
  return (
    <section>
      <h3>{issue.title}</h3>
      <p>{issue.body}</p>
    </section>
  )
}

export default IssueItem
