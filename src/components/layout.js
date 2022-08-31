import * as React from "react"
import { Link } from "gatsby"
import Nav from "../components/Nav"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  console.log("LOCATION ===>", location)
  let header

  if (isRootPath) {
    header = (
      <>
        {/* <h1 className="main-heading">
          <Link to="/">{`Frontend\nDeveloper`}</Link>
        </h1>
        <p>프론트엔드 개발자</p> */}
      </>
    )
  } else {
    header = (
      <>
        <h2>
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        </h2>
      </>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      {!isRootPath && <Nav />}
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout
