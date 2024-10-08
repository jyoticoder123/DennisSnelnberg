import React from 'react'
import Page2Info from './page2Info/Page2Info'
import Page2Animation from './page2Animation/Page2Animation'

const Page2 = () => {
  return (
    <div className="min-h-screen py-[8vw] px-[5vw]">
      <Page2Info/>
      <Page2Animation/>
      <button className="text-xl px-10 py-5 border-2 rounded-full relative left-1/3 translate-x-1/2">More Work</button>

    </div>
  )
}

export default Page2