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
          { name: 'title', content: post.frontmatter.title },

          { name: 'description', content: post.frontmatter.description },
          ,
          {
            name: 'og:title',
            content: post.frontmatter.title,
          },
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
            property: 'fb:app_id',
            content: '277289552818368',
          },
          {
            property: 'og:description',
            content: post.frontmatter.description,
          },
          {
            name: 'twitter:description',
            content: post.frontmatter.description,
          },
          {
            name: 'twitter:image:src',
            content:
              post.frontmatter.thumbnail &&
              props.data.site.siteMetadata.url + post.frontmatter.thumbnail,
          },

          {
            rel: 'author',
            href: 'https://twitter/@saigowthamr',
          },
          { property: 'author', content: 'Sai gowtham' },
          { property: 'og:type', content: 'article' },
          { name: 'twitter:card', content: 'summary_large_image' },
          {
            property: 'article:publisher',
            content: 'https://www.twitter.com/@saigowthamr',
          },
          { property: 'article:author', content: 'Sai gowtham' },
          { name: 'robots', content: 'index, follow' },
          {
            property: 'article:published_time',
            content: post.frontmatter.date,
          },
          { name: 'twitter:creator', content: '@saigowthamr' },
          { property: 'og:site_name', content: 'saigowtham' },
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
        date(formatString:"LLL")
      }
    }
    site {
      siteMetadata {
        url
      }
    }
  }
`
