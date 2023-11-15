import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-0"> {/* Adjusted margin with ml-0 */}
            <li className="nav-item">
              <Link
                to="/"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 'bold', color: '#333', textTransform: 'uppercase' }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/About"
                className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 'bold', color: '#333', textTransform: 'uppercase' }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Gallery"
                className={currentPage === '/Gallery' ? 'nav-link active' : 'nav-link'}
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 'bold', color: '#333', textTransform: 'uppercase' }}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 'bold', color: '#333', textTransform: 'uppercase' }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
