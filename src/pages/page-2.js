import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';
const SecondPage = ({ data }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >

      <Helmet
        title='Blog posts'
        meta={[
          { name: 'description', content:'Blog for javascript webdevlopment' },
        ]}
      />
      <h1>Number of posts{data.allMarkdownRemark.totalCount}</h1>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }, i) => (
          <ul key={i}>
            <Link
              to={node.fields.slug}
              style={{ textDecoration: `none`, color: `inherit` }}
            >
              <h3>{node.frontmatter.date}</h3>

              <h1>
                {node.frontmatter.title} Time to Read {node.timeToRead}min
              </h1>
              <p>{node.excerpt}</p>
            </Link>
          </ul>
        ))}
      </div>
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
