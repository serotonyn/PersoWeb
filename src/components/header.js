import React from 'react'
import Link from 'gatsby-link'

const Header = ({ isMobMenuHidden, hideMobMenu }) => {

  return (
    <header className={isMobMenuHidden ? "fullHeader hide" : "fullHeader"}>
      <div className="blocLogo">
        <h1>
          {/*TODO optimize logo svg*/}
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 274.2 374.91">
            <title>youcef_khaber_logo</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <polygon fill="#6799B2" points="111.25 0 80.09 0 1 124.97 32.16 124.97 111.25 0" />
                <polygon fill="#6799B2"
                  points="110.25 249.94 79.09 249.94 0 124.97 31.16 124.97 110.25 249.94" />
                <polygon fill="#576D8E"
                  points="115.6 124.97 146.76 124.97 225.85 249.94 194.69 249.94 115.6 124.97" />
                <polygon fill="#576D8E"
                  points="115.6 374.91 146.76 374.91 225.85 249.94 194.69 249.94 115.6 374.91" />
                <polygon fill="#65BEC2"
                  points="164.05 249.94 195.21 249.94 274.2 124.97 243.14 124.97 164.05 249.94" />
              </g>
            </g>
          </svg>
        </h1>

        {/*desc*/}
        <span className="desc">
          <p>Sites Web</p>
          <p>Applications Mobile</p>
          <p>Logiciels de bureau</p>
        </span>
        <div className="divider">
          <hr />
        </div>
      </div>
      <nav>
        <ul>
          <li className="x" onClick={() => hideMobMenu(true)}>X</li>
          <li><Link to="/" state={{ fromLink: true }} activeClassName="active-link">Accueil</Link></li>
          <li><Link to="/portfolio" state={{ fromLink: true }} activeClassName="active-link">Portfolio</Link></li>
          <li>Services</li>
          <li>Clients</li>
          <li>Articles</li>
          <li>Notes</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="sousMenu">
        <div className="divider">
          <hr />
        </div>
        <div className="sousMenuDiv">
          <div>
            <p className="phrase PhraseToContact">
              Pour discuter d’affaires ou de conception, de javascript ou de tout ce qui porte sur le développement.
            </p>
            <Link className="social" to="">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 240 240"><path fill="#3C5A99" d="M248.082 262.307c7.854 0 14.223-6.369 14.223-14.225V18.812c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857 0-14.224 6.367-14.224 14.224v229.27c0 7.855 6.366 14.225 14.224 14.225h229.27z" /><path fill="#FFF" d="M182.409 262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261 3.127-18.935 19.275-18.935l20.596-.009V45.045c-3.562-.474-15.788-1.533-30.012-1.533-29.695 0-50.025 18.126-50.025 51.413v28.684h-33.585v38.895h33.585v99.803h40.166z" /></svg>
            </Link>
          </div>
          <div>
            <p className="PhraseToContact">
              Pour demander un devis
            </p>
            <Link className="email" to="">
              <span style={{ direction: "rtl", unicodeBidi: 'bidi-override' }}>moc.liamg@fecuoy1uoyuoy</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
