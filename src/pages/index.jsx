import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'

const IndexPage = ({ location: { state } }) => {
  let fromLink
  if (state) {
    fromLink = state.fromLink
  }
  return (
    <Layout fromLink={fromLink}>
      <div className="page">
        <main>
          <div className="mainChild">
            <div className="container">
              <div className="mainTxt">
                <span className="bonjour">
                  Bonjour, je m&rsquo;appelle youcef
                </span>
                <br />
                <h1 className="h1">
                  J&rsquo;aide les entreprises et les particuliers à créer leur
                  présence en ligne et à proposer leurs produits et services.{' '}
                </h1>
                <br />
                <p className="txt txt1">
                  Je conçois et réalise des sites rapides, utiles et agréables à
                  utiliser pour lesquels j&rsquo;assure la maintenance ainsi que
                  les mises à jour.
                </p>
                <br />
                <p className="txt txt2">
                  Avec des compétences solides en programmation, chaque création
                  de site que je réalise est unique, au design conçu sur mesure
                  et codé manuellement pour être au plus proche de vos attentes.
                </p>
              </div>
              <br />
              <div className="actionBar">
                <Link to="/portfolio" state={{ fromLink: true }}>
                  Voir mes réalisations
                </Link>
                <Link to="/contact" state={{ fromLink: true }}>
                  Me contacter
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default IndexPage
