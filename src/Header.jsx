import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <NavLink exact className="navbar-brand" to="">PortfolioApp</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
           
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <NavLink exact activeClassName="menubar" className="nav-link" to="">HOME</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact activeClassName="menubar" className="nav-link" to="/about">ABOUT</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact activeClassName="menubar" className="nav-link" to="/testimonial">TESTIMONIAL</NavLink>
                </li><li className="nav-item">
                  <NavLink exact activeClassName="menubar" className="nav-link" to="/contact">CONTACT US</NavLink>
                </li>


              </ul>

            </div>
          </div>
        </nav>
      

    </>
  )
}

export default Header;