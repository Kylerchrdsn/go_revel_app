import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from './navLink.jsx'

const Menu = () => (
  <nav className="navbar navbar-default menu">
    <div className="container-fluid">
      <div className="navbar-header">
        <IndexLink className="navbar-brand" to="/">
          Go Revel
        </IndexLink>
      </div>
      <ul className="nav navbar-nav">
        <NavLink to="/">
          Home <span className="glyphicon glyphicon-tent"></span>
        </NavLink>
        <NavLink to="gameOfLife">
          Game of Life <span className="glyphicon glyphicon-adjust"></span>
        </NavLink>
        <NavLink to="palette">
          Color Palette <span className="glyphicon glyphicon-tint"></span>
        </NavLink>
      </ul>
    </div>
  </nav>
)

export default Menu
