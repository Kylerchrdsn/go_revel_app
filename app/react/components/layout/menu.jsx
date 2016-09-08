import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Menu = () => (
  <nav className="navbar navbar-default menu">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Go Revel
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li>
          <Link to="/">
            Home <span className="glyphicon glyphicon-tent"></span>
          </Link>
        </li>
        <li>
          <Link to="gameOfLife">
            Game of Life <span className="glyphicon glyphicon-adjust"></span>
          </Link>
        </li>
        <li>
          <Link to="palette">
            Color Palette <span className="glyphicon glyphicon-tint"></span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Menu
