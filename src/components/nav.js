/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import route from "../contents/route.constant"
const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-grey-d);
  padding: 16px 0;
`

const NavLink = styled(Link)`
  font-family: var(--fontFamily-title);
  text-decoration: none;
  cursor: pointer;
  padding: 8px 0;
  &.iscurpath {
    span {
      color: #718ffc;
    }
  }
  span {
    position: relative;
    color: #333;
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 5px;
      position: absolute;
      left: 0;
      bottom: 0px;
      z-index: -1;
      background: var(--color-primary);
      transition: width 0.3s;
    }
  }
  &:hover {
    span {
      &::after {
        width: 100%;
      }
    }
  }
`

const Nav = ({ curPath }) => {
  const navList = route
  return (
    <NavWrapper>
      {navList &&
        navList.map(n => {
          return (
            <NavLink
              key={n.label}
              to={n.link}
              className={curPath === n.link ? "iscurpath" : ""}
            >
              <span>{n.label}</span>
            </NavLink>
          )
        })}
    </NavWrapper>
  )
}

export default Nav
