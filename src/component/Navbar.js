import React from 'react';
import { NavLink } from 'react-router-dom';



function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <a class="navbar-brand fw-bold fs-2" href="#">BOSS COLLECTION </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page" >Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link" >Products </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" >About </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" >Contact </NavLink>
              </li>
            </ul>
          </div>
          <div className='buttons'>
            <NavLink to="/signup" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"> Signup </i>
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"> Cart (0)</i>
            </NavLink>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar;