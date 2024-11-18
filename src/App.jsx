import React from 'react'

import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Services from "./components/services/Services"
import Title from "./components/title/Tilte"
import About from "./components/About/About"
import Team from "./components/TEAM/Team"
import Who from "./components/whoWe/Who"
import LegalFrame from "./components/LegalFrameworks/LegalFrame"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle = 'Our Services' title = 'What We Offer?'/>
      <Services/>
      <Title subTitle = 'what you know' title = 'About Us'/>
      <About/>
      <Title subTitle = 'why choose us?' title = ' who we are!'/>
      <Who/>
      <Title subTitle = '' title = ' OUR TEAM'/>
      <Team/>
      <Title subTitle = 'LEGAL' title = '& REGULARITY SERVICES'/>
      <LegalFrame/>
      <Title subTitle = 'CONTACT US' title = 'FOR ANY QUERRY'/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App