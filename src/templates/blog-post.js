import React from 'react'
import Helmet from 'react-helmet'

export default ({ data }) => {
  const post = data.markdownRemark
  const location = window.location
  return (
    <div>
      <Helmet
        title={post.frontmatter.title}
        meta={[{ name: 'description', content: post.frontmatter.description },
          { property: "og:url", content: location.href},
          { name: "twitter:card", content:"summary_large_image"} ,
          { property: "og:image", content: post.frontmatter.thumbnail && post.frontmatter.thumbnail}
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
  }
`
