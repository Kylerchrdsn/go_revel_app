import React, { PropTypes } from 'react'

const Menu = () => (
  <nav className="navbar navbar-default menu">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          Go Revel
        </a>
      </div>
      <ul className="nav navbar-nav">
        <li>
          <a href="/">
            Home <span className="glyphicon glyphicon-tent"></span>
          </a>
        </li>
        <li>
          <a href="/Life/Index">
            Game of Life <span className="glyphicon glyphicon-adjust"></span>
          </a>
        </li>
        <li>
          <a href="/App/Palette">
            Color Palette <span className="glyphicon glyphicon-tint"></span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Menu
