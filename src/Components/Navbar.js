import React from 'react'
//import "../Styles/Navbar.css"
import "../Styles/Navbar.css"
import Hamburger from "../Images/Hamburger.svg"

export default function Navbar() {
  return (
    <div className='navbar'>
        <>
            <a href="/home" > Home </a>
            <a href="/about" > About </a>
            <a href="/profile" > Profile </a>
            <a href="/contact" > Contact </a>
        </>
        <> 
            <img src={Hamburger} className="logo" alt="Hamburger"/>
        </>
    </div>
  )
}