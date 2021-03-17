require('dotenv').config()
let clientSecretFromEnv = JSON.parse(process.env.CLIENTSECRET)

module.exports = {
  siteMetadata: {
    title: `Product Development`,
    description: `Product Development Representation.`,
    author: `@tobiasrosenberg`,
  },
  pathPrefix: "/TobsDev",
  flags: {
    THE_FLAG: false
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '11Wkf97CsgOnUkNJ67rib-H4-2bnl1BmKqdpxeCt491w',
          worksheetTitle: 'pagecontent',
          credentials: clientSecretFromEnv,
      }
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-boilerplate`,
        short_name: `boilerplate`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
