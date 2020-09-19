import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import '../layouts/portfolioPage.sass'
import Project from '../components/Project'

const Portfolio = ({ location: { state } }) => {
  let fromLink
  if (state) {
    fromLink = state.fromLink
  }

  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            desc
            image
            path
            website
          }
        }
      }
      allFile(
        filter: { relativePath: { glob: "*" }, name: { glob: "project_*" } }
      ) {
        nodes {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const images = data.allFile.nodes
  const mds = data.allMarkdownRemark.nodes

  return (
    <Layout fromLink={fromLink}>
      <div className="page">
        <div className="container">
          <h1>Portfolio</h1>
          <p className="subtitle">Projects Séléctionnés</p>
          <p className="intro">
            Sites web, applications mobiles, extensions pour navigateur,
            applications web, applications pour bureau ( windows, macos et
            linux).
          </p>
          <hr />

          <div className="projects">
            {mds.map(
              ({ frontmatter: { title, desc, image, path, website } }) => (
                <Project
                  key={title}
                  title={title}
                  desc={desc}
                  childImageSharp={
                    images.find((x) => x.name === image).childImageSharp.fluid
                  }
                  path={path}
                  website={website}
                />
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Portfolio
