import React from 'react'
import Heroimage from './Heroimage'
import CenterFlex from './CenterFlex'
import HeroText from './HeroText'


const Homepage = () => {
  return (
    <div className='h-screen pt-[20vw]'>
        <Heroimage/>
        <CenterFlex/>
        <HeroText/>
    </div>
  )
}

export default Homepage