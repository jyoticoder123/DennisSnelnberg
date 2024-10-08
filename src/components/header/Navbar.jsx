import React from 'react'
import Navpart1 from './Navpart1'
import Navpart2 from './Navpart2'
const Navbar = () => {
  return (
    <div className='flex z-10 fixed w-full justify-between items-center py-10 px-12 text-white' >
        <Navpart1 />
        <Navpart2 />
    </div>
  )
}

export default Navbar