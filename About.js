import React from 'react'
import AboutSection from '../Components/AboutSection'
import BackGround from '../Components/BackGround'
import Nav from '../Components/Nav'

export default function About() {
  return (
   <>
    <div className='hero_area'>
    <BackGround />
    <Nav />
    </div>
    <AboutSection />

   </>

  )
}
