import React from 'react'

import Nav from '../Components/nav/Navbar2'
import HeroSimple from '../Components/hero/hero_simple'

import Footer from '../Components/footer/Footer'
import Cookie from '../Components/cookie/cookie'
import Container from '../Components/container/container'

import ListingFilter from '../Components/listings_filter/listings_filter'
import Filter from '../Components/filter/filter'
import Listings from '../Components/listings/listings'
import Register from '../Components/register/register'

export default function RegisterPage() {
  return (
    <>
    <section>
        <Nav/>
        <HeroSimple title="Register"/>
        <Container>
            <Register/> 
        </Container>
        <Cookie/>
    </section>
    <Footer/>
</>
  )
}
