import React from 'react'

import Navbar2 from '../Components/nav/Navbar2';
import Footer from '../Components/nav/Footer';

export default function ListingsPage() {
  return (
    <div className="App"> 
        {/**     <Navbar/>{/** This one is the tutorial one */}  

        {/**  <NavbarTest/> */}

        <Navbar2/>{/** This is the main one to be used */}
        <Footer/>
    </div>
  )
}
