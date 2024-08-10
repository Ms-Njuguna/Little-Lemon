import React from 'react';
import './Nav.css';
import Logo from './Logo .svg';
import Basket from './Basket.svg';
import {
    Link
} from "react-router-dom";

function Navbar() {
   return (
      <nav className="navbar">
         <div className="navbar-left">
            <img src={Logo} className="logo" alt='logo' />
         </div>
         <div className="navbar-center">
            <ul className="nav-links">
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/about">About</Link>
               </li>
               <li>
                  <Link to="/menu">Menu</Link>
               </li>
               <li>
                  <Link to="/booking">Reservations</Link>
               </li>
               <li>
                  <Link to="/orderonline">Order Online</Link>
               </li>
            </ul>
         </div>
         <div className="navbar-right">
            <a href="/bag" className="bag-icon">
               <i class="bi bi-bag"></i>
               <img src={Basket}
               width={23}
               height={23}
                alt='basket'
               />
               <span className="bag-count">0</span>
            </a>
            <a href="/account" className="user-icon">
               <i className="fas fa-user"></i>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#495E57" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
               </svg>
            </a>
         </div>
      </nav>
   );
}

export default Navbar;