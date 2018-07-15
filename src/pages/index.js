import React from 'react'
// import Splash from '../components/Splash'
// import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="page">
    <main>
      <div className="mainChild">
        <div className="container">
          <div className="mainTxt">
            <span className="bonjour">Bonjour, je m'appelle youcef</span>
            <br />
            <h1 className="h1">
              J’aide les entreprises et les particuliers à créer leur présence
              en ligne et à proposer leurs produits et services.
            </h1>
            <br />
            <p className="txt txt1">
              Je conçois et réalise des sites rapides, utiles et agréables à utiliser pour lesquels j’assure la maintenance ainsi que les mises à jour.
            </p>
            <br />
            <p className="txt txt2">
              Avec des compétences solides en programmation, chaque création de site que je réalise est unique, au design conçu sur mesure et codé manuellement pour être au plus proche de vos attentes.
            </p>
          </div>
          <br />
          <div className="actionBar">
            <a href="">Voir mes réalisations</a>
            <a href="">Me contacter</a>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default IndexPage
