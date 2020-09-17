import React from 'react'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import '../layouts/project.sass'

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
  pageContext: { image },
}) {
  const {
    markdownRemark: post,
    allFile: { nodes: images },
  } = data // data.markdownRemark holds our post data

  return (
    <Layout fromLink={true}>
      <div className="page">
        <div className="container">
          <Helmet title={`Projects - ${post.frontmatter.title}`} />
          <h1>Projectsh</h1>
          <p className="subtitle">{post.frontmatter.title}</p>
          <p className="intro">{post.frontmatter.desc}</p>
          <hr />

          <div className="projects_project">
            {/* <Img
              fluid={images.find(x => x.name === image).childImageSharp.fluid}
              alt={images.find(x => x.name === image).name}
            /> */}
            <div
              className="project_story"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        desc
      }
    }
    allFile(filter: { relativePath: { glob: "*" } }) {
      nodes {
        name
        # childImageSharp{
        #   fluid{
        #     ...GatsbyImageSharpFluid
        #   }
        # }
      }
    }
  }
`
