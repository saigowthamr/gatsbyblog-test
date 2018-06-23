import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const NavLink = props => {

  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPages = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext
  const previousUrl = index - 1 == 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <div>
      <div>
        <Helmet
          title="Blog posts"
          meta={[
            {
              name: 'description',
              content: 'Blog for javascript webdevlopment',
            },
          ]}
        />
        <h1>Number of pages{pageCount}</h1>
        {group.map(({ node }, i) => (
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
      <div className="previousLink">
        <NavLink
          test={first}
          url={'/posts/' + previousUrl}
          text={first ? null : "Go to Previous Page"}
        />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={'/posts/' + nextUrl} text="Go to Next Page" />
      </div>
    </div>
  )
}
export default IndexPages


