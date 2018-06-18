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
  }],
}
