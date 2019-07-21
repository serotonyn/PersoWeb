import React from 'react'
import { Helmet } from 'react-helmet'
import MobHeader from './MobHeader'
import Header from './header'
import Splash from './Splash'
import { StaticQuery, graphql } from "gatsby"
import '../layouts/index.scss'
import '../layouts/main.sass'
import '../layouts/splash.sass'

export default class A extends React.PureComponent {

  render() {
    const { children, fromLink } = this.props
    return (
      <StaticQuery
        query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
          <div className="root">
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            />
            {!fromLink && <Splash />}
            <MobHeader />
            <div className="layout">
              <Header />
              {children}
            </div>
          </div>
        )}
      />
    )
  }
}