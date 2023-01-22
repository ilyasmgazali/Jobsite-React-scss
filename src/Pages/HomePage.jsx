import React from 'react'

// import Navbar from '../../Components/Navbar';
// import NavbarTest from '../../Components/NavbarTest';
import Navbar2 from '../Components/nav/Navbar2';
import Footer from '../Components/nav/Footer';

export default function HomePage() {
  return (
    <div className="App"> 
        {/**     <Navbar/>{/** This one is the tutorial one */}  

        {/**  <NavbarTest/> */}

        <Navbar2/>{/** This is the main one to be used */}
        <Footer/>
    </div>
  )
}