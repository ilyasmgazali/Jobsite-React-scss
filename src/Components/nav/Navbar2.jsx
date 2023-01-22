import React from 'react'
import {Link} from "react-router-dom"

import "../../Styles/css/main.css"

import HamburgerImage from "../../Images/Hamburger.svg"
import MagnifyingGlass from "../../Images/magnifying-glass 1.svg"
import BellNoNotification from "../../Images/bell-no-notification.svg"
import Star1 from "../../Images/star 1.svg"
import User from "../../Images/user.svg"
import Logout from "../../Images/logout.svg"

export default function Navbar2() {
  return (
    //** -- NAVIGATION -- */ 
    <nav className="nav">
        {/* -- NAV MOBILE - PURE HTML/CSS, NO JAVASCRIPT - using input/checkbox -- */}
        <input type="checkbox" className="nav__toggle" id="Hamburger"/>
        <ul className="nav__leftBlock">
            <li className="nav__hamburger">
                <label htmlFor="Hamburger"> {/** "htmlFor" or "for" */}
                    <img src={HamburgerImage} alt=""/>
                </label></li>
            <li className="nav__logo">
                <Link className='a' id='a'  to="/"> JOBPlus+</Link>
            </li>
        </ul>
        <ul className="nav__icons">
            <li><Link className='a' id='a'  to="/listings"><img src={MagnifyingGlass} alt=""/></Link></li>
            <li><Link className='a' id='a' to="/"><img src={BellNoNotification} alt=""/></Link></li>
            <li><Link className='a' id='a' to="/"><img src={Star1} alt=""/></Link><span className="nav__savedcount">1</span></li>
            <li><Link className='a' id='a' to="/"><img src={User} alt=""/></Link></li>
            <li><Link className='a' id='a' to="/"><img src={Logout} alt=""/></Link></li>
        </ul>
        <ul className="nav__droplist">
            <li><Link className='a' id='a' to="/">Home</Link></li>
            <li><Link className='a' id='a' to="/Job-Listings">Job listings</Link></li>
            <li><Link className='a' id='a'  to="/Job-Listings">Job applications</Link></li>
        </ul>
    </nav>
  )
}