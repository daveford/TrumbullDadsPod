import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = ({menuLinks}) => {
    return (
        <footer
            style={{
            background: `black`,
            marginTop: `2rem`,
            padding: `2rem`,
            }}
        >
            <div>
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
            </div>
            <div>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </div>
      </footer>
    )
}

export default Footer