import React from 'react'
import Link from 'gatsby-link'
import Logo from '../assets/logo.svg'

const MobHeader = ({ showMenuOrEmail }) => (
  <header className="mobHeader">
    <div
      role="button"
      onClick={() => showMenuOrEmail(() => 'menu')}
      className="MobMenuText"
      tabIndex={-1}
    >
      {`< Menu >`}
    </div>
    <div>
      <Link to="/">
        <h1 className="">
          <img src={Logo} alt="khaber youcef" />
        </h1>
      </Link>
    </div>
    <div
      to=""
      className="MobMenuText"
      onClick={() => showMenuOrEmail((menuOrEmail) => 'email')}
    >
      {`< Email >`}
    </div>
  </header>
)

export default MobHeader
