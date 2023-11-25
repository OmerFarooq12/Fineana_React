import React from 'react'
import BackGround from '../Components/BackGround'
import Nav from '../Components/Nav'
import BookSection from '../Components/BookSection'

export default function BookTable() {
  return (
   <>
<div className='hero_area'> 
    <BackGround/>
    <Nav/>
</div>
<BookSection />
   </>
  )
}
