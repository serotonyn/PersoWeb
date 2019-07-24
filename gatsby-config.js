const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Youcef',
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-sass', {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/assets/logo.png",
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `portfolio_projects`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md`,
        name: "pages",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`
  ],
}

