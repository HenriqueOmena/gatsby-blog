import React from "react"
import { useStaticQuery } from "gatsby"
import { isStyledComponent } from "styled-components"
import styled from
const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description, author },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <div className="Profile-wrapper">
      <h1> {title} </h1>
      <h2> {description} </h2>
      <p> i love JS</p>
    </div>
  )
}

export default Profile
