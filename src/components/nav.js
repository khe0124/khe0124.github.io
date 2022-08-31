/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"
import route from "./route.constant"

const Nav = () => {
  const navList = route

  return (
    <div className="nav">
      {navList &&
        navList.map(n => {
          return <Link to={n.link}>{n.label}</Link>
        })}
    </div>
  )
}

export default Nav
