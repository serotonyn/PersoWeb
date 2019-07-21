import React from 'react'
import Layout from '../components/layout'
// import Link from 'gatsby-link'
// import Img from "gatsby-image"
// import graphql from 'gatsby'


const LearnMore = () => (
  <span>En savoir plus</span>
)

const Portfolio = ({ location: { state } }) => {
  const fromLink = state !== null ? state.fromLink : null
  return (
    <Layout fromLink={fromLink} >
      <div className="page">
        <div className="mainChild">
          <div className="container">
            <h1>Portfolio</h1>
            <p>Projects Séléctionnés</p>
            <p>Sites web, applications mobiles, extensions pour navigateur, applications web, applications pour bureau ( windows, macos et linux).</p>
            <hr />

            <div className="project">
              <h2 className="project_name">
                Bytesnime.com
          </h2>
              <p className="project_desc">
                Un site commercial avec panier d’achat au design flat, ergonomique et simple d’utilisation.
          </p>
              <LearnMore />
            </div>

            <div className="project">
              <h2 className="project_name">
                Rayat
          </h2>
              <p className="project_desc">
                Rayat est un jeu quiz de type Qcm qui vise tout autant un public jeune qu’un public moins jeune.
          </p>
              <LearnMore />
            </div>

            <div className="project">
              <h2 className="project_name">
                AndroGym
          </h2>
              <p className="project_desc">
                Un logiciel compatible Windows, MacOs et Linux pour la gestion de membres pouyr gym.
          </p>
              <LearnMore />
            </div>

            <div className="project">
              <h2 className="project_name">
                Search-Youtube-Comments
          </h2>
              <p className="project_desc">
                Une extension chrome pour filter les commentaires youtube à l’aide de mots-clés.
          </p>
              <LearnMore />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Portfolio
