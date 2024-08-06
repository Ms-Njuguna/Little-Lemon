import React from 'react';
import './Navbar.css';
import Logo from './Logo .svg';


function Navbar() {
   return (
      <nav className="navbar">
         <div className="navbar-left">
            <img src={Logo} className="Logo" />
         </div>
         <div className="navbar-center">
            <ul className="nav-links">
               <li>
                  <a href="/menu">Menu</a>
               </li>
               <li>
                  <a href="/reservation">Reserve a table</a>
               </li>
               <li>
                  <a href="/about">About Us</a>
               </li>
               <li>
                  <a href="/contact">Contact</a>
               </li>
            </ul>
         </div>
         <div className="navbar-right">
            <a href="/bag" className="bag-icon">
               <i class="bi bi-bag"></i>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
               </svg>
               <span className="bag-count">0</span>
            </a>
            <a href="/account" className="user-icon">
               <i className="fas fa-user"></i>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
               </svg>
            </a>
         </div>
      </nav>
   );
}

export default Navbar;