import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const NavLink = ({ children, to }) => (
  <li>
    <Link to={ to }>
      { children }
    </Link>
  </li>
)

NavLink.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string.isRequired
}

export default NavLink
