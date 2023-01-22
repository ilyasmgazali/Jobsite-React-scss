import React from 'react'

export default function NavbarTest2() {
  return (
    {/* NAVIGATION */}
    <nav className="nav">
    {/* NAV MOBILE - PURE HTML/CSS, NO JAVASCRIPT - using input/checkbox */} 
    <input type="checkbox" className="nav__toggle" id="Hamburger" />
    <ul className="nav__leftBlock">
      <li className="nav__hamburger"><label htmlFor="Hamburger"><img src="Images/Hamburger.svg" alt="" /></label></li>
      <li className="nav__logo"><a href="index.html">JOBPlus+</a></li>
    </ul>
    <ul className="nav__icons">
      <li><a href="listings.html"><img src="Images/magnifying-glass 1.svg" /></a></li>
      <li><a href="notifications.html"><img src="Images/bell-no-notification.svg" /></a></li>
      <li><a href="saved_jobs.html"><img src="Images/star 1.svg" /></a><span className="nav__savedcount">1</span></li>
      <li><a href="profile.html"><img src="Images/user.svg" /></a></li>
      <li><a href="login.html"><img src="Images/logout.svg" /></a></li>
    </ul>
    <ul className="nav__droplist">
      <a href="index.html"><li>Home</li></a>
      <a href="listings.html"><li>Job listings</li></a>
      <a href="applications.html"><li>Job applications</li></a>
    </ul>
  </nav>
  )
}
