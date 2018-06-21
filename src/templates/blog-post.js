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
          { name: 'twitter:card', content: 'summary_large_image' },
          {
            property: 'og:image',
            content:
              post.frontmatter.thumbnail &&
              props.data.site.siteMetadata.url + post.frontmatter.thumbnail,
          },
        ]}
      />
      {console.log('public url: ', process.env.PUBLIC_URL)}
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
