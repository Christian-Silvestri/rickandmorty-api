import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4">
      <div className="container">
      <Link to='/' className='fs-3 ubuntu navbar-brand'>
        Rick&Morty
      </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <i className='fas fa-bars open fw-bold text-dark'></i>
          <i className='fas fa-times close fw-bold text-dark'></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5">
            <NavLink to='/' activeclassname='active' className="nav-link">Characters</NavLink>
            <NavLink to='/episodes' activeclassname='active'  className="nav-link">Episodes</NavLink>
            <NavLink to='/locations' activeclassname='active'  className="nav-link">Locations</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar