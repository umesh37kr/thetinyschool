import React, { useState } from 'react'
import {  Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import '../styles/components/components.css'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  let showNavbar = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <>
      <header className='header'>
      <Link to='/'><img src="images/logo.png" alt="logo" className='logo' /></Link>
        <nav className="navbar">
            <ul className={toggleMenu ? "navbar-list mobile-menu-links" : "navbar-list"}>
              <li><Link to='/about'>About TSS</Link></li>
              <li><Link to='/admission'>Admissions</Link></li>
              <li><Link to='/events-gallery'>Events & Gallery</Link></li>
              {/* <li><Link to='/students'>Student</Link></li> */}
              {/* <li><Link to='/news'>News</Link></li> */}
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/login'>Login</Link></li>
            </ul>
          <button className='icon'
            onClick={showNavbar}><FaBars />
          </button>
        </nav>
      </header>
    </>
  )
}

export default Navbar