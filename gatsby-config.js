/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
        icon: 'favicon.png'
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
    `gatsby-plugin-netlify-cms`,
    // Including in your Gatsby plugins will transform any paths in your frontmatter
    `gatsby-plugin-netlify-cms-paths`,

    // Including in your Remark plugins will transform any paths in your markdown body
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-netlify-cms-paths`,
        ],
      },
    },
  ],
}
