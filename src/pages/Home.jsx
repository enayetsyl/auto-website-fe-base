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
      <Hero/>
      <Features/>
      <AboutUs/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home