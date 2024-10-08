import React from 'react'
import Navbar from './components/header/Navbar'
import Homepage from './components/landingPage/Homepage'
import Page2 from './components/page2/Page2'
import Footer from './components/footer/Footer'
import LocomotiveScroll from 'locomotive-scroll';





const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Navbar />
      <Homepage />
      <Page2/>
      {/* <Footer/> */}
      
    </div>
  )
}

export default App