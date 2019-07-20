import React from 'react'
import Link from 'gatsby-link'

class Header extends React.Component {


  render() {
    return (
      <header className="fullHeader">
        <div className="blocLogo">
          {/*Logo*/}
          <Link to="/">
            <h1>
              {/*TODO optimize logo svg*/}
              <svg xmlns="http://www.w3.org/2000/svg" width="274" height="374" viewBox="0 0 274.2 374.91"><title>
                Asset 1</title>
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
          </Link>
          <hr />

          {/*desc*/}
          <span className="desc"><p>Front-end developer</p><p>Full-stack design specialist</p></span>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/notes">Notes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="sousMenu">
          <div className="sousMenuDiv">
            <p className="PhraseToContact">For business enquiries or casual chatter about design, development,
                    startup life, remote.</p>
            <hr />
            <Link className="email" to="">
              <span style={{ direction: "rtl", unicodeBidi: 'bidi-override' }}>moc.liamg@fecuoy1uoyuoy</span>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header
