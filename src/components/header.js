import React from 'react'
import Link from 'gatsby-link'
import './header.css';

const Header = ({ siteTitle }) => (
  <div className="main-nav">
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >

        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>

    </div>
  </div>
)

export default Header
