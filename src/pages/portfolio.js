import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import '../layouts/portfolio.sass'

import { navigate } from "gatsby"


const LearnMore = ({ link }) => (
  <span className="project_learnMore" onClick={() => navigate(link)}>En savoir plus</span>
)

const Portfolio = ({ location: { state } }) => {
  const fromLink = state !== null ? state.fromLink : null

  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {relativePath: {glob: "*"}}){
        nodes{
          name
          childImageSharp{
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const images = data.allFile.nodes
  console.log(images.find(x => x.name === 'project_bytesnime'))

  return (
    <Layout fromLink={fromLink} >
      <div className="page">
        <div className="container">
          <h1>Portfolio</h1>
          <p className="subtitle">Projects Séléctionnés</p>
          <p className="intro">Sites web, applications mobiles, extensions pour navigateur, applications web, applications pour bureau ( windows, macos et linux).</p>
          <hr />

          <div className="project">
            <div className="project_image_wrapper">
              <Img
                fluid={images.find(x => x.name === "project_bytesnime").childImageSharp.fluid}
                alt={images.find(x => x.name === "project_bytesnime").name}
              />
            </div>
            <div className="project_text">
              <h2 className="project_name">
                Bytesnime.com
          </h2>
              <p className="project_desc">
                Un site commercial avec panier d’achat au design flat, ergonomique et simple d’utilisation.
          </p>
              <LearnMore link="/projects/bytesnime" />
            </div>
          </div>

          <div className="project">
            <div className="project_image_wrapper">
              <Img
                fluid={images.find(x => x.name === "project_rayat").childImageSharp.fluid}
                alt={images.find(x => x.name === "project_rayat").name}
              />
            </div>
            <div className="project_text">
              <h2 className="project_name">
                Rayat
          </h2>
              <p className="project_desc">
                Rayat est un jeu quiz de type Qcm qui vise tout autant un public jeune qu’un public moins jeune.
          </p>
              <LearnMore link="/projects/rayat" />
            </div>
          </div>

          <div className="project">
            <div className="project_image_wrapper">
              <Img
                fluid={images.find(x => x.name === "project_androgym").childImageSharp.fluid}
                alt={images.find(x => x.name === "project_androgym").name}
              />
            </div>
            <div className="project_text">
              <h2 className="project_name">
                AndroGym
              </h2>
              <p className="project_desc">
                Un logiciel compatible Windows, MacOs et Linux pour la gestion de membres de gym.
              </p>
              <LearnMore />
            </div>
          </div>

          <div className="project">
            <div className="project_image_wrapper">
              <Img
                fluid={images.find(x => x.name === "project_youtube-search-comments").childImageSharp.fluid}
                alt={images.find(x => x.name === "project_youtube-search-comments").name}
              />
            </div>
            <div className="project_text">
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
