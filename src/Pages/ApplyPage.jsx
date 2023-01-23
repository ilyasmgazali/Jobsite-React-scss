import React from 'react'

import Nav from '../Components/nav/Navbar2'
import Hero from '../Components/hero/hero'

import Footer from '../Components/footer/Footer'
import Cookie from '../Components/cookie/cookie'
import Container from '../Components/container/container'

import ListingFilter from '../Components/listings_filter/listings_filter'
import Filter from '../Components/filter/filter'
import Apply from '../Components/apply/apply'



export default function ApplyPage() {
  return (
    <>
        <section>
          <Nav />
          <Hero />
          <Container>
            <ListingFilter >
              <Filter />
              <Apply />
            </ListingFilter >
          </Container>
          <Cookie />
        </section>
        <Footer/>
    </>
  )
}
