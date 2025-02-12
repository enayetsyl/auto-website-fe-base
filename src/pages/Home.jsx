import React from 'react'
import Hero from '../component/Hero'
import Features from '../component/Features'
import AboutUs from '../component/AboutUs'
import Testimonials from '../component/Testimonials'
import CallToAction from '../component/CallToAction'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
      <Hero
      heroHeading="Welcome"
      heroText="Explore the world with us, where every journey begins with a single step."
      heroImage="https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
      />
      <Features/>
      <AboutUs/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home