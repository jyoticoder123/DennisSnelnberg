import React from 'react'
import 'remixicon/fonts/remixicon.css'


const CenterFlex = () => {
  return (
    <div className="relative flex w-11/12 justify-between items-end">
        <div className="flex bg-black items-center gap-5 text-white p-5 pl-12 rounded-e-full">
           <h3 className="text-sm leading-tight">Located <br/> in the <br/> Netherland</h3>
           <div className="bg-gray-500 px-5 py-4  rotate-12 rounded-full">
           <i className="ri-global-line font-thin text-3xl"></i>
           </div>
        </div>
        <div className="text-white flex flex-col gap-25">
            <i className="ri-arrow-right-down-line text-3xl"></i>
            <h2 className="text-3xl leading-snug">Freelance<br/>
            Designer & Developer</h2>

        </div>
    </div>
  )
}

export default CenterFlex