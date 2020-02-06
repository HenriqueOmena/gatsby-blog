import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <ul>
        <li>
          <Link to="/about" activeStyle={{ color: "red" }}>
            About
          </Link>
          <Link to="/" activeStyle={{ color: "red" }}>
            Home
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default AboutPage
