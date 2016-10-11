import React, { PropTypes } from 'react'
import Menu from '../nav/menu.jsx'

const Layout = ({ children }) => (
  <main>
    <Menu />
    { children }
  </main>
)

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
