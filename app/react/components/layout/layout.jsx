import React, { PropTypes } from 'react'
import Menu from './menu.jsx'

const Layout = ({ children }) => (
  <div>
    <Menu />
    { children }
  </div>
)

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
