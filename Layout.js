// import BackGround from '../Components/BackGround'
import React from 'react'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
       {/* <div className='hero_area'>
        <BackGround />
       
        </div> */}
        <Outlet />
        <Footer />
    </>
  )
}
