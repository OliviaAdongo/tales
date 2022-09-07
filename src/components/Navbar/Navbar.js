import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul>
    <li>
    <NavLink to ="/">
    Home
    </NavLink>
    </li>
    <li>
    <NavLink to ="/about">
    AboutUs
    </NavLink>
    </li>

    <li>
    <NavLink to ="/book">
    Book
    </NavLink>
    </li>

    <li>
    <NavLink to ="/read">
    Reading List
    </NavLink>
    </li>

    <li>
    <NavLink to ="/review">
    Reviews
    </NavLink>
    </li>
    
    </ul>
    </nav>
  )
}

export default Navbar