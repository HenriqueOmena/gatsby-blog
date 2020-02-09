/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Profile from "./profile"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <aside>
        <Profile />
        <ul>
          <li>
            <Link to="/about" activeStyle={{ color: "red" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/" activeStyle={{ color: "red" }}>
              Home
            </Link>
          </li>
        </ul>
      </aside>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
