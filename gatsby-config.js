module.exports = {
  siteMetadata: {
    title: 'Gatsby Default',
    url: 'https://gowtham.netlify.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: 'src',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-netlify-cms',
  ],
}
