import React from 'react'

// import Navbar from '../../Components/Navbar';
// import NavbarTest from '../../Components/NavbarTest';
import Navbar2 from '../Components/nav/Navbar2';
import Footer from '../Components/footer/Footer';
import Hero from '../Components/hero/hero'
import Container from '../Components/container/container';
import Sector from '../Components/sector/sector';
import Cookie from '../Components/cookie/cookie';


export default function HomePage() {
  return (
    <div className="App"> 
        {/**     <Navbar/>{/** This one is the tutorial one */}  

        {/**  <NavbarTest/> */}
        <>
          <section>
            <Navbar2 />{/** This is the main one to be used */}
            <Hero />
            <Container >
              <Sector />
            </Container >
            <Cookie />
          </section>
          <Footer />
        </>
    </div>
  )
}