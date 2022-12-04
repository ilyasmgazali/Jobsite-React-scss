import React from 'react'
//import css
import "../Styles/main.css"
//import images
import HamburgerImage from "../Images/Hamburger.svg"
import MagnifyingGlass from "../Images/magnifying-glass 1.svg"
import BellNoNotification from "../Images/bell-no-notification.svg"
import Star1 from "../Images/star 1.svg"
import User from "../Images/user.svg"
import Logout from "../Images/logout.svg"
//import react router dom
import {Link} from "react-router-dom"
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
            <li className="nav__logo"><a href="index.html"><Link to="/"> JOBPlus+</Link></a></li>
        </ul>
        <ul className="nav__icons">
            <li><a href="listings.html"><Link to="/"><img src={MagnifyingGlass} alt=""/></Link></a></li>
            <li><a href="notifications.html"><Link to="/"><img src={BellNoNotification} alt=""/></Link></a></li>
            <li><a href="saved_jobs.html"><Link to="/"><img src={Star1} alt=""/></Link></a><span className="nav__savedcount">1</span></li>
            <li><a href="profile.html"><Link to="/"><img src={User} alt=""/></Link></a></li>
            <li><a href="login.html"><Link to="/"><img src={Logout} alt=""/></Link></a></li>
        </ul>
        <ul class="nav__droplist">
            <a href="index.html"><li><Link to="/">Home</Link></li></a>
            <a href="listings.html"><li><Link to="/Job-Listings">Job listings</Link></li></a>
            <a href="applications.html"><li><Link to="/Job-Listings">Job applications</Link></li></a>
        </ul>
    </nav>
  )
}