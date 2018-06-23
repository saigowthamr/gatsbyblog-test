import React from 'react'
import createHistory from 'history/createBrowserHistory'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import './blog-post.css'

export default props => {
  console.log(props);
  const post = props.data.markdownRemark
  const { next, prev } = props.pathContext
  return (
    <div>
      <div className="main-body">
        <Helmet
          title={post.frontmatter.title}
          meta={[
            { name: 'title', content: post.frontmatter.title },

            { name: 'description', content: post.frontmatter.description },
            ,
            {
              property: 'og:title',
              content: post.frontmatter.title,
            },
            {
              property: 'og:url',
              content:
                props.data.site.siteMetadata.url + props.location.pathname,
            },

            {
              property: 'og:image',
              content:
                post.frontmatter.thumbnail &&
                props.data.site.siteMetadata.url + post.frontmatter.thumbnail,
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
              href: 'https://twitter/saigowthamr',
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
        <div className="date-time">
          <span>{post.frontmatter.date} </span>
          <span>{post.timeToRead} min read.</span>
        </div>
        <div>
          by&nbsp;
          <a href="https://twitter.com/saigowthamr">
            {props.data.site.siteMetadata.author}
          </a>
        </div>

        {post.frontmatter.thumbnail && <img src={post.frontmatter.thumbnail} />}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            listStyle: 'none',
          }}
        >
          <li style={{ marginRight: '4px' }}>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${props.data
                .site.siteMetadata.url + props.location.pathname}`}
              target="blank"
            >
              fb
            </a>
          </li>
          <li>
            <a
              href={`https://twitter.com/intent/tweet?url=${props.data.site
                .siteMetadata.url + props.location.pathname}&text=${
                post.frontmatter.title
              } by @saigowthamr`}
              target="blank"
            >
              twitter
            </a>
          </li>
        </ul>
      </div>

      <ul className="pager">
        {prev && (
          <Link to={prev.fields.slug}>
            <li className="prev">Previous Post</li>
          </Link>
        )}
        {next && (
          <Link to={next.fields.slug}>
            <li className="prev">Next Post</li>
          </Link>
        )}
      </ul>
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        description
        thumbnail
        date(formatString: "MMM Do")
      }
    }
    site {
      siteMetadata {
        url
        author
      }
    }

    }
`
