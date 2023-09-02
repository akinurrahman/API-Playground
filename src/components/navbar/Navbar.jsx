import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/currency-converter">API Playground</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        
        
        <li class="nav-item">
          <Link class="nav-link" to="/jokes">Jokes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Facts">Facts</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/quotes">Quotes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/currency-converter">Currency Converter</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;