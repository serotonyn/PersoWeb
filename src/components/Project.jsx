import React from 'react'
import Img from 'gatsby-image'
import { navigate } from 'gatsby'

const LearnMore = ({ link }) => (
  <span
    tabIndex={-1}
    role="button"
    className="project_learnMore"
    onClick={() => navigate(link)}
  >
    En savoir plus
  </span>
)
export default ({ title, desc, childImageSharp, path, website }) => {
  return (
    <div className="project">
      <div className="project_image_wrapper">
        <Img fluid={childImageSharp} alt={title} />
      </div>
      <div className="project_text">
        <h2 className="project_name">
          <a href={website} target="blank">
            {title}
          </a>
        </h2>
        <p className="project_desc">{desc}</p>
        <LearnMore link={path} />
      </div>
    </div>
  )
}
