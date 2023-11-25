import React from 'react'
import BackGround from '../Components/BackGround'
import Nav from '../Components/Nav'
import SliderSection from '../Components/SliderSection'
import OfferSection from '../Components/OfferSection'
import FoodSection from '../Components/FoodSection'
import AboutSection from '../Components/AboutSection'
import BookSection from '../Components/BookSection'
// import ClientsSection from '../Components/ClientsSection'

export default function Home() {
  return (
    <>
  <div className='hero_area'>
        <BackGround />
        <Nav />
            <SliderSection />
            </div>
            <OfferSection />
            <FoodSection />
            <AboutSection />
            <BookSection />
            {/* <ClientsSection /> */}
    </>
    )
}
