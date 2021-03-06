import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/header.scss"

function Header({ siteTitle, menuLinks }) {
  return (
    <header
      style={{
        background: `black`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        className="site-header"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <StaticImage
            src="../images/trumbull-dads-pod-logo.jpg"
            width={150}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Trumbull Dads Podcast"
          />
        </Link>
        <nav>
          <ul style={{ display: "flex", flex: 1 }}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: `none`,
                  padding: `1rem`,
                }}
              >
                <Link style={{ color: `white` }} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
