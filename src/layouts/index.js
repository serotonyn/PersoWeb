import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MobHeader from '../components/MobHeader'
import Header from '../components/header'
import './index.scss'
import './main.sass'

const Layout = ({ children, data }) => (
  <div className="root">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <MobHeader />
    <div className="layout">
      <Header siteTitle={data.site.siteMetadata.title} />
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
