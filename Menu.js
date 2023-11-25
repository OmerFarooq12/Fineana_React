import React from 'react'
import Nav from '../Components/Nav'
import BackGround from '../Components/BackGround'
import FoodSection from '../Components/FoodSection'

export default function Menu() {
  return (
    <>
    <div className='hero_area'> 
    <BackGround/>
    <Nav/>
    </div>
    <FoodSection />
    </>
  )
}
