import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">InfoFusion</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/currency-converter">Convert currency</Link>
        </li>
       
        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Explore More
          </div>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/jokes">Jokes</Link></li>
            <li><Link className="dropdown-item" to="/facts">Facts</Link></li>
            <li><Link className="dropdown-item" to="/quotes">Quotes</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
