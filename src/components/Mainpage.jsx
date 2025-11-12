import React from 'react'
import Page1 from './section1/Page1'
import Page2 from './section2/page2'
import Navbar from './section1/Navbar'

const Mainpage = () => {
  return (
    <div className='main h-screen w-full bg-red-500'>
    <Navbar/>
     <Page1/>
     <Page2/>
    </div>
  )
}

export default Mainpage
