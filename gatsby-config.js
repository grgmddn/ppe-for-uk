const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        // GTM
        {
          resolve: 'gatsby-plugin-google-tagmanager',
          options: {
            id: process.env.GTM_ID,
            defaultDataLayer: { platform: 'gatsby' },
            gtmAuth: process.env.GTM_AUTH,
            gtmPreview: process.env.GTM_PREVIEW,
            dataLayerName: 'dataLayer'
          }
        },
        // gatsby-image
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/src/assets/images`,
            name: 'images',
          },
        },
        `gatsby-plugin-twitter`,
        `gatsby-plugin-anchor-links`
    ]
}