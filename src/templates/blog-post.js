import React from 'react'
import createHistory from 'history/createBrowserHistory'
import Helmet from 'react-helmet'

export default props => {
  const post = props.data.markdownRemark
  return (
    <div>
      <Helmet
        title={post.frontmatter.title}
        meta={[
          { name: 'description', content: post.frontmatter.description },
          {
            property: 'og:url',
            content: props.data.site.siteMetadata.url + props.location.pathname,
          },

          {
            property: 'og:image',
            content:
              post.frontmatter.thumbnail &&
              props.data.site.siteMetadata.url + post.frontmatter.thumbnail,
          },
          {
            name: 'twitter:image',
            content:
              post.frontmatter.thumbnail &&
              props.data.site.siteMetadata.url + post.frontmatter.thumbnail,
          },
          {
            name: 'twitter:image:src',
            content: post.frontmatter.thumbnail &&
              props.data.site.siteMetadata.url + post.frontmatter.thumbnail,
          },
          { name: 'twitter:card', content: 'summary_large_image' },
        ]}
      />
      <h1>{post.frontmatter.title}</h1>
      <img src={post.frontmatter.thumbnail && post.frontmatter.thumbnail} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <h1>hello dude</h1>
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        thumbnail
      }
    }
    site {
      siteMetadata {
        url
      }
    }
  }
`
