

import {motion, useScroll} from "framer-motion"
import React, { useEffect, useState } from 'react'



const HeroText = () => {

  const {scrollY} = useScroll()
  const [scrollingDirection, setScrollingDirection] = useState(1) // Changed to use array destructuring
  
  const handleScroll = () => {
    const currentDirection = scrollY.get() - scrollY.getPrevious()

    if(currentDirection > 0){
      setScrollingDirection(1)
    } else {
      setScrollingDirection(-1) // Changed to -1 for upward scrolling
    }
  }

  useEffect(() => {
    scrollY.on("change", handleScroll)

    return () => scrollY.clear(); // Cleanup to prevent memory leaks
  }, [scrollY]);

  return (
    <motion.div className="relative text-white flex flex-nowrap"
      initial={{
        x: -3370
      }}
      animate={{
        x: scrollingDirection > 0 ? -6740 : 0 // Adjusted for both directions
      }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity
      }}
    >
        <h1 className="text-[18vw] tracking-tighter whitespace-nowrap">- Dennis Snellnberg</h1>
        <h1 className="text-[18vw] tracking-tighter whitespace-nowrap">- Dennis Snellnberg</h1>
        <h1 className="text-[18vw] tracking-tighter whitespace-nowrap">- Dennis Snellnberg</h1>
        <h1 className="text-[18vw] tracking-tighter whitespace-nowrap">- Dennis Snellnberg</h1>
        <h1 className="text-[18vw] tracking-tighter whitespace-nowrap">- Dennis Snellnberg</h1>
    </motion.div>
  )
}

export default HeroText