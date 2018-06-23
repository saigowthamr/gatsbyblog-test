import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './blog.css'

const SecondPage = props => {
  const data = props.data
  return (
    <div>
      <Helmet
        title="Blog posts"
        meta={[
          { name: 'description', content: 'Blog for javascript webdevlopment' },
        ]}
      />
      <h1>Number of posts{data.allMarkdownRemark.totalCount}</h1>
      {data.allMarkdownRemark.edges.map(({ node }, i) => (
        <Link
          key={i}
          to={node.fields.slug}
          style={{ textDecoration: `none`, color: `inherit` }}
        >
          <ul className="posts">
            <h1>{node.frontmatter.title}</h1>
            <span>
              {node.frontmatter.date} &nbsp;
              {node.timeToRead}min read
            </span>
            <p>{node.excerpt}</p>
          </ul>
        </Link>
      ))}

    </div>
  )
}

export default SecondPage

export const query = graphql`
  query MyFilesQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          html
          excerpt
          timeToRead
        }
      }
    }
  }
`
