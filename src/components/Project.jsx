import React from 'react'

export const Project = ({}) => {
  return (
    <div className="project">
      <div className="project_image_wrapper">
        <Img
          fluid={
            images.find((x) => x.name === 'project_bytesnime').childImageSharp
              .fluid
          }
          alt={images.find((x) => x.name === 'project_bytesnime').name}
        />
      </div>
      <div className="project_text">
        <h2 className="project_name">Bytesnime.com</h2>
        <p className="project_desc">
          Un site commercial avec panier d’achat au design flat, ergonomique et
          simple d’utilisation.
        </p>
        <LearnMore link="/projects/bytesnime" />
      </div>
    </div>
  )
}
