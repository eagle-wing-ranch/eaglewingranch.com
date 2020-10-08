/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path');

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: 'https://eaglewingranch.ca'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-transformer-javascript-frontmatter`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eagle Wing Ranch`,
        short_name: `Eagle Wing Ranch`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#002146`,
        display: `standalone`,
        icon: 'favicon.png',
        // include_favicon: false
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-resolve-src',
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://eaglewingranch.ca`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-instagram',
      options: {
        // EWR
        username: '596695573'
      }
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        // Niagara Novice Series
        username: '7663664610'
      }
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `eaglewingranch.ca`,
        // customDomain: 'stats.eaglewingranch.ca'
      },
    },
  ],
}
