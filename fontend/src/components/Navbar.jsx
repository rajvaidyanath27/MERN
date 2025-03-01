import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">MERN</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            
            <li classNameName="nav-item">
              <Link  to="/" className="nav-link">Create Ticket</Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link" >All Tickets</Link>
            </li>
            
          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
