import React from 'react'
import Slider from './Slider';
import Counter from './Counter';
import Services from './Services';
import Property from './Property';
import OurAnimities from './OurAnimities';
import Testimonial from './Testimonial';
import Footer from './Footer'
import Login from './Login';
const Home = () => {
  return (
    <>
      <Slider />
      <Counter />
      <Services />
      <Property />
      <OurAnimities />
      <Testimonial />
      <Footer />
      <Login/>
    </>
  )
}

export default Home
