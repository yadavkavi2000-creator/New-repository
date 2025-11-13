import React from 'react'
import Page1 from './section1/Page1'
import Page2 from './section2/Page2'
import Navbar from './section1/Navbar'
import Page3 from './section3/page3'
import Page4 from './section4/Page4'

const Mainpage = () => {
  return (
    <div className='main h-screen w-full bg-red-500'>
    <Navbar/>
     <Page1/>
     <Page2/>
     <Page3/>
     <Page4/>
    </div>
  )
}

export default Mainpage
