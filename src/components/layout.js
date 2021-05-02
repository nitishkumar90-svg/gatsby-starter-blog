import * as React from "react"
import { Link } from "gatsby"
import Header from "./header/Header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header isRoot={location.pathname.indexOf('about') === -1 ? 'true' : 'false'}></Header>
      <main>{children}</main>
      <footer className="text-center">
        <p>© {new Date().getFullYear()}. Nitish Kumar</p>
      </footer>
    </div>
  )
}

export default Layout
