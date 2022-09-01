import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Nav from "../components/Nav"
import FishIcon from "../components/FishIcon"
const PageTitle = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin: 0;
    padding-left: 1rem;
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const curPath = location.pathname

  let header
  if (!isRootPath) {
    header = (
      <PageTitle>
        <FishIcon />
        <h2>{curPath.substr(1)}</h2>
      </PageTitle>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className={isRootPath ? "global-header" : ""}>{header}</header>
      {!isRootPath && <Nav curPath={curPath} />}
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout
