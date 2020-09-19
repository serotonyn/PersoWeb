import React from 'react'
import Link from 'gatsby-link'
import CopyToClipboard from './CopyToClipboard'
import Logo from '../assets/logo.svg'
import '../layouts/header.sass'

const BlocLogo = () => (
  <div className="blocLogo">
    <h1>
      <img src={Logo} alt="khaber youcef" />
    </h1>

    <span className="desc">
      <p>Sites Web</p>
      <p>Applications Mobile</p>
      <p>Logiciels de bureau</p>
    </span>
    <div className="divider">
      <hr />
    </div>
  </div>
)

const MenuOrEmail = ({
  showMenuOrEmail,
  reversedEmail,
  menuOrEmail,
  email,
}) => {
  return menuOrEmail === 'menu' || menuOrEmail === '' ? (
    <nav>
      <ul>
        <li>
          <button
            type="button"
            className="x"
            onClick={() => showMenuOrEmail('')}
          >
            X
          </button>
        </li>
        <li>
          <Link
            tabIndex={0}
            to="/"
            state={{ fromLink: true }}
            activeClassName="active-link"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            tabIndex={0}
            to="/portfolio"
            state={{ fromLink: true }}
            activeClassName="active-link"
          >
            Portfolio
          </Link>
        </li>
        <li>Services</li>
        <li>Clients</li>
        <li>Articles</li>
        <li>Notes</li>
        <li>
          <Link
            tabIndex={0}
            to="/contact"
            state={{ fromLink: true }}
            activeClassName="active-link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <div className="emailContainer">
      <button type="button" className="x" onClick={() => showMenuOrEmail('')}>
        X
      </button>
      <span style={{ direction: 'rtl', unicodeBidi: 'bidi-override' }}>
        {reversedEmail}
      </span>
      <CopyToClipboard email={email} />
    </div>
  )
}

const SousMenu = ({ reversedEmail }) => (
  <div className="sousMenu">
    <div className="divider">
      <hr />
    </div>
    <div className="sousMenuDiv">
      <div>
        <p className="phrase PhraseToContact">
          Pour discuter d&rsquo;affaires ou de conception, de javascript ou de
          tout ce qui porte sur le développement.
        </p>
        <button className="social" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 240 240"
          >
            <path
              fill="#3C5A99"
              d="M248.082 262.307c7.854 0 14.223-6.369 14.223-14.225V18.812c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857 0-14.224 6.367-14.224 14.224v229.27c0 7.855 6.366 14.225 14.224 14.225h229.27z"
            />
            <path
              fill="#FFF"
              d="M182.409 262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261 3.127-18.935 19.275-18.935l20.596-.009V45.045c-3.562-.474-15.788-1.533-30.012-1.533-29.695 0-50.025 18.126-50.025 51.413v28.684h-33.585v38.895h33.585v99.803h40.166z"
            />
          </svg>
        </button>
      </div>
      <div>
        <p className="PhraseToContact">Pour demander un devis</p>
        <button type="button" className="email">
          <span style={{ direction: 'rtl', unicodeBidi: 'bidi-override' }}>
            {reversedEmail}
          </span>
        </button>
      </div>
    </div>
  </div>
)

export default ({ showMenuOrEmail, menuOrEmail }) => {
  const email = 'khaberyoucef@outlook.com'
  const reversedEmail = email.split('').reverse().join('')

  return (
    <header className={!menuOrEmail.length ? 'fullHeader hide' : 'fullHeader'}>
      <BlocLogo />

      <MenuOrEmail
        showMenuOrEmail={showMenuOrEmail}
        reversedEmail={reversedEmail}
        menuOrEmail={menuOrEmail}
        email={email}
      />

      <SousMenu reversedEmail={reversedEmail} />
    </header>
  )
}
