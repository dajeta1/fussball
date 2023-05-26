import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Page</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Favorites" className="nav-link active">Favorites</Link>
            </li>
            <li className="nav-item">
              <Link to="/Register" className="nav-link active">Register</Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className="nav-link active">Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/Shop" className="nav-link">Shop</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/Footer" className="nav-link active">Footer</Link>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Nav