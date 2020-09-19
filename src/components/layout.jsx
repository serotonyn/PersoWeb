import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import MobHeader from './MobHeader'
import Header from './header'
import Splash from './Splash'
import '../layouts/index.scss'
import '../layouts/indexPage.sass'
import '../layouts/layout.sass'

export default ({ children, fromLink }) => {
  const [menuOrEmail, showMenuOrEmail] = useState('')

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
      render={(data) => (
        <div className="root">
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: 'Youcef KHABER, software engineer',
              },
              { name: 'keywords', content: 'developpeur web alger' },
            ]}
          />
          {!fromLink && <Splash />}
          <MobHeader showMenuOrEmail={showMenuOrEmail} />
          <div
            className="layout"
            style={!menuOrEmail.length ? {} : { position: 'fixed' }}
          >
            <Header
              showMenuOrEmail={showMenuOrEmail}
              menuOrEmail={menuOrEmail}
            />
            {children}
          </div>
        </div>
      )}
    />
  )
}
