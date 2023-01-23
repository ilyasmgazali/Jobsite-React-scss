import React from 'react'

import Nav from '../Components/nav/Navbar2'
import SimpleHero from '../Components/hero/hero_simple'
import Container from '../Components/container/container'
import Profile from '../Components/profile/profile'
import Cookie from '../Components/cookie/cookie'
import Footer from '../Components/footer/Footer'

export default function ProfilePage() {
  return (
    <>
      <section>
        <Nav />
        <SimpleHero title="Profile"/>
        <Container>
          <Profile />
        </Container>
        <Cookie />
      </section>
      <Footer />
    </>
  )
}
