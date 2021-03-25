import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/footer.scss"

const Footer = ({menuLinks}) => {
    return (
        <footer
            style={{
            background: `black`,
            marginTop: `2rem`,
            padding: `2rem`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`
            }}>
            <div className="container">
                <div className="footer-links">
                    {menuLinks.map(link => (
                        <Link className="footer-link" style={{ color: `white` }} to={link.link}>
                        {link.name}
                        </Link>
                    ))}
                </div>
                <div className="footer__text">
                    <span style={{ color: `white` }}>© {new Date().getFullYear()}, Built with </span>
                    {` `}
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </div>
            </div>
      </footer>
    )
}

export default Footer