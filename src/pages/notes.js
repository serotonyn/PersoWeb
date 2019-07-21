import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'

const SecondPage = ({ location: { state } }) => {
  const fromLink = state !== null ? state.fromLink : null
  return (
    <Layout fromLink={fromLink} >
      <div className="with-left-drawer-spacer">
        <h1>Notes</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default SecondPage
